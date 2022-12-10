import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { MatchData } from "./Models/MatchData";
import { HtmlReport } from "./Reporters/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.output.print(output);
  }
}
