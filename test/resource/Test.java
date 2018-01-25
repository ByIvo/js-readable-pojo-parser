package resource.test;

import java.util.Long;
import java.math.BigDecimal;
import java.util.Date;

public class Test {

  private Date testDate;
  protected Long testAge = 15L;

  public BigDecimal testQuantity = BigDecimal.valueOf(5);

  int version;

  public Test() {

  }

  public void setTestDate(Date testDate) {
    this.testDate = testDate;
  }

  public Date getTestDate() {
    return this.testDate;
  }
}
