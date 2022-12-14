import { MatchResult } from "../Enums/MatchResult";
import { MatchData } from "../Models/MatchData";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach((match) => {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    });

    return "Team : " + this.teamName + " has won " + wins + " games";
  }
}
