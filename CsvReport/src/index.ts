import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { CsvFileReader } from "./Readers/CsvFileReader";
import { MatchReader } from "./Readers/MatchReader";
import { ConsoleReport } from "./Reporters/ConsoleReport";
import { HtmlReport } from "./Reporters/HtmlReport";
import { Summary } from "./Summary";

//read date from csv
const matchReader = MatchReader.fromCsv("football.csv");
const sumamry = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
sumamry.buildAndPrintReport(matchReader.matches);

//console.log(matchReader.matches);
