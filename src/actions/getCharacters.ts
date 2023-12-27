import axios, { AxiosResponse, AxiosError } from "axios";

export interface CharacterData {
  // Define the structure of your location data based on the actual API response
  // For example, you can use interfaces to define the structure
  // Example:
  // id: number;
  // name: string;
  // ...
  error: object;
}

export const getCharacters = async (baseUrl: string, page: string | undefined | string[], status:string | undefined | string[] ): Promise<AxiosResponse<CharacterData> | AxiosError<CharacterData>> => {
  try {
    const config = {
      method: "post",
      url: baseUrl + "/api/characters",
      data: {page: page || "", status: status || ""}
    };

    const response: AxiosResponse<CharacterData> = await axios(config); // Explicitly define type

    
    return response;
  } catch (error) {
    // Explicitly specify the type of the error
    return error as AxiosError<CharacterData>;
  }
};
