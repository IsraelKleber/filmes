import axiosInstance from "../axiosInstance";

class MovieService {
  public async getMoviePopularList() {
    const response = await axiosInstance.get(`popular?&language=en-US&page=1`);
    return response.data;
  }
}

export default new MovieService();
