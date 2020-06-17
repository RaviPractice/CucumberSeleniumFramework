package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginStepDefination {
	WebDriver driver;
	
	@Given("^user is already on loginpage$")
	public void user_already_on_login_page() {
		WebDriverManager.chromedriver().setup();
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\RAVI\\Desktop\\Naveen\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
		//driver.manage().window().maximize();
		
	}
	
	@When("^title of loginpage is OrangeHRM$")
	public void title_of_login_page_is_orangehrm() {
		try {
		  String loginpagetitle = driver.getTitle();
		System.out.println("title of login page :: "+loginpagetitle);
		Assert.assertEquals("OrangeHRM", loginpagetitle);
		}catch(Exception e) {
			System.out.println("some exception occur in getting title..");
		}
		
	}
	//without using Exaples keyword - reg exp
		//1. \"([^\"]*)\"
	 	//2. \"(.*)\"
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_password(String username,String password) {
		
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password);
	}
	
	@Then("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.id("btnLogin")).click();
	}
	
	@Then("^user is on homepage$")
	public void user_is_on_home_page() {
		try {
			  String homepagetitle = driver.getTitle();
			System.out.println("title of home page :: "+homepagetitle);
			Assert.assertEquals("OrangeHRM", homepagetitle);
			}catch(Exception e) {
				System.out.println("some exception occur in getting title..");
			}
	}
	
	@Then("^click on admin tab and click on add button$")
	public void click_on_admin_tab_and_click_on_add_button() {
		driver.findElement(By.xpath("//b[text()='Admin']")).click();
		driver.findElement(By.xpath("//input[@value='Add']")).click();	
	}
	
	@Then("^user enters user details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_employeename_username_password_confirmpassword(String empname,String username,String pswd ,String cnfpswd) throws InterruptedException {
		driver.findElement(By.xpath("//label[text()='Employee Name']//following::input[1]")).sendKeys(empname);
		driver.findElement(By.xpath("//label[text()='Username']//following::input[1]")).sendKeys(username);
		driver.findElement(By.xpath("//label[text()='Password']//following::input[1]")).sendKeys(pswd);
		driver.findElement(By.xpath("//label[text()='Confirm Password']//following::input[1]")).sendKeys(cnfpswd);
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		Thread.sleep(5000);
		
	}
	
	
	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
	

}
