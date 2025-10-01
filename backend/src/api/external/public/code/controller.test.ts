import { Request, Response } from 'express';
import { getHandler, downloadHandler } from './controller';
import { codeService } from '../../../../services/code';
import { BadRequestError, NotFoundError } from '../../../../middleware/errorMiddleware';

// Mock the code service
jest.mock('../../../../services/code', () => ({
  codeService: {
    generateCode: jest.fn(),
    generateCodeFile: jest.fn(),
  },
}));

describe('Code Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockRequest = {
      params: { language: 'javascript' },
    };
    mockResponse = {
      json: jest.fn(),
      setHeader: jest.fn(),
      send: jest.fn(),
    };
    mockNext = jest.fn();
  });

  describe('getHandler', () => {
    it('should return generated code', async () => {
      const mockCode = {
        language: 'JavaScript',
        content: 'console.log("Hello, World!");',
        extension: 'js',
      };

      (codeService.generateCode as jest.Mock).mockResolvedValue(mockCode);

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(codeService.generateCode).toHaveBeenCalledWith('javascript');
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockCode,
        metadata: expect.any(Object),
      });
    });

    it('should call next with NotFoundError if language not found', async () => {
      (codeService.generateCode as jest.Mock).mockResolvedValue(null);

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));
    });

    it('should call next with BadRequestError if language param is invalid', async () => {
      mockRequest.params = { language: '' };

      await getHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(BadRequestError));
    });
  });

  describe('downloadHandler', () => {
    it('should set headers and send file content', async () => {
      const mockCodeFile = {
        content: 'console.log("Hello, World!");',
        filename: 'hello_world.js',
      };

      (codeService.generateCodeFile as jest.Mock).mockResolvedValue(mockCodeFile);

      await downloadHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(codeService.generateCodeFile).toHaveBeenCalledWith('javascript');
      expect(mockResponse.setHeader).toHaveBeenCalledWith(
        'Content-Type',
        'application/octet-stream'
      );
      expect(mockResponse.setHeader).toHaveBeenCalledWith(
        'Content-Disposition',
        'attachment; filename="hello_world.js"'
      );
      expect(mockResponse.send).toHaveBeenCalledWith(mockCodeFile.content);
    });

    it('should call next with NotFoundError if language not found', async () => {
      (codeService.generateCodeFile as jest.Mock).mockResolvedValue(null);

      await downloadHandler(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(NotFoundError));
    });
  });
});
