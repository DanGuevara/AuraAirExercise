export interface IMovieSearchInfo {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export class MovieSearchInfo {
  public readonly title: string;
  public readonly year: string;
  public readonly imdbID: string;
  public readonly type: string;
  public readonly poster: string;

  constructor(data: IMovieSearchInfo) {
    this.title = data.Title;
    this.year = data.Year;
    this.imdbID = data.imdbID;
    this.type = data.Type;
    this.poster = MovieSearchInfo.isValidUrl(data.Poster) ? data.Poster : '/assets/noImageAvailable.jpg';
  }

  private static isValidUrl(url: string): boolean {
    try {
      const result = new URL(url);
    } catch (err) {
      return false;
    }

    return true;
  }
}
