package myRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions (
		features = "C:\\Users\\RAVI\\April2020\\OrangeHRMBDDFramework\\src\\main\\java\\Features\\users.feature", //the path of the feature files
		glue={"stepDefination"}, //the path of the step definition files
		dryRun = false, //mapping is correct or not (b/w featurefile and step definationfile)
		strict = true, //it will check any undefined or pending steps are there in step def file (missing in step def info provided)
		monochrome = true, //display the console output in a proper readable format (console)
		format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"} // to generate different types of reporting output in html,json,xml
		)
public class TestRunner {
	

}
