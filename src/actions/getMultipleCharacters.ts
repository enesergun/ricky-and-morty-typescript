import axios, { AxiosResponse, AxiosError } from "axios";

export interface MultipleCharacters {
  // Define the structure of your location data based on the actual API response
  // For example, you can use interfaces to define the structure
  // Example:
  // id: number;
  
  // ...
  
}

export const getMultipleCharacters = async (multipleCharacterIds: string | undefined | string[]): Promise<AxiosResponse<MultipleCharacters> | AxiosError<MultipleCharacters>> => {
  try {
    const config = {
      method: "post",
      url: "http://localhost:3000/api/character",
      data: {characterId: multipleCharacterIds}
    };

    const response: AxiosResponse<MultipleCharacters> = await axios(config); // Explicitly define type

    
    return response;
  } catch (error) {
    // Explicitly specify the type of the error
    return error as AxiosError<MultipleCharacters>;
  }
};
