import axios, { AxiosResponse, AxiosError } from "axios";

export interface CharacterData {
  // Define the structure of your location data based on the actual API response
  // For example, you can use interfaces to define the structure
  // Example:
  // id: number;
  
  // ...
  
}

export const getCharacter = async (baseUrl: string | null, characterIds: string | undefined | string[]): Promise<AxiosResponse<CharacterData> | AxiosError<CharacterData>> => {
  try {
    const config = {
      method: "post",
      url: baseUrl + "/api/character",
      data: {characterId: characterIds}
    };

    const response: AxiosResponse<CharacterData> = await axios(config); // Explicitly define type

    
    return response;
  } catch (error) {
    // Explicitly specify the type of the error
    return error as AxiosError<CharacterData>;
  }
};
