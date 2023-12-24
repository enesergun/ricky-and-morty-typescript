import axios, { AxiosResponse, AxiosError } from "axios";

export interface SingleLocationData {
  // Define the structure of your location data based on the actual API response
  // For example, you can use interfaces to define the structure
  // Example:
  // id: number;
  name: string;
  type: string;
  dimension: string;
  residents:  Array<string>;
  // ...
  error: object;
}

export const getSingleLocation = async (locationId: string | undefined | string[]): Promise<AxiosResponse<SingleLocationData> | AxiosError<SingleLocationData>> => {
  try {
    const config = {
      method: "post",
      url: "http://localhost:3000/api/location",
      data: {locationId: locationId}
    };

    const response: AxiosResponse<SingleLocationData> = await axios(config); // Explicitly define type

    
    return response;
  } catch (error) {
    // Explicitly specify the type of the error
    return error as AxiosError<SingleLocationData>;
  }
};
