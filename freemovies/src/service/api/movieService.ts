import axiosInstance from "../axiosInstance";

class MovieService {
  public async getMoviesPopularList() {
    const response = await axiosInstance.get(`popular?&language=en-US&page=1`);
    return response.data;
  }

  public async getMovieDetails(id: string) {
    const response = await axiosInstance.get(`${id}?&language=en-US`);
    return response.data;
  }

  public async getMovieVideos(id: string) {
    const response = await axiosInstance.get(`${id}/videos`);
    return response.data;
  }
}

export default new MovieService();
