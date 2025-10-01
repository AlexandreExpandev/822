import { Request, Response } from 'express';
import { listHandler } from './controller';
import { languageService } from '../../../../services/language';
import { languageTypes } from '../../../../services/language/languageTypes';

// Mock the language service
jest.mock('../../../../services/language', () => ({
  languageService: {
    listLanguages: jest.fn(),
  },
}));

describe('Language Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  it('should return a list of languages', async () => {
    const mockLanguages: languageTypes.Language[] = [
      { id: 'javascript', name: 'JavaScript', extension: 'js' },
      { id: 'python', name: 'Python', extension: 'py' },
    ];

    (languageService.listLanguages as jest.Mock).mockResolvedValue(mockLanguages);

    await listHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(languageService.listLanguages).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      data: mockLanguages,
      metadata: expect.any(Object),
    });
  });

  it('should call next with error if service throws', async () => {
    const error = new Error('Service error');
    (languageService.listLanguages as jest.Mock).mockRejectedValue(error);

    await listHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalledWith(error);
  });
});
