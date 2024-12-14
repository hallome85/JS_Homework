// Разработать е2е теста со следующими шагами:
//  - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
//  - Войти в приложения используя учетные данные aqacourse@gmail.com / password 
//  - Создать продукт (модуль Products)
//  - Верифицировать текст нотификации и закрыть кликнув на крестик
//  - Верифицировать созданный продукт в таблице (должен быть самым верхним)
//  - Удалить продукт через ui (кликнув по икнонке урны в таблице и далее в в модалке)
//  - Завалидировать нотификацию удаления
//  - Удостовериться, что продута в таблице нет (можно функционалом search)
 import {email, password} from "../data/validate_data";
interface IProduct {
    name: string,
    manufacturer: string,
    amount: number,
    price: number,
    notes: string,
} 
describe ("[UI] Karpovich Add And Delete Product", () => {
const emailSelector = '[for="emailinput"]';
const passwordSelector = "#passwordinput";
const loginbuttonSelector = "button.btn.btn-primary";
const homePageHeaderSelector = "aqacourse@gmail.com";
const productsButtonSelector  = 'a[name="Products"]';
const startProductPageSelector = "//body/div[1]";
const addProductButtonSelector = "div>button.btn.btn-primary";
const saveProductButtonSelector = "#save-new-product";
const createdNotificationSelector = "//body/div[1]";
const closeCrossOnSuccessNotificationSelector ="button.btn-close";
const addNewProductInputSelector = "#inputName";
const addNewProductPriceSelector = "#inputPrice";
const addNewProductManufacturerSelector = "#inputManufacturer";
const addNewProductAmountSelector = "#inputAmount";
const addNewProductNotesSelector = "#textareaNotes";

       
const homePageHeaderText = "Welcome to Sales Management Portal";
const productCreatedNotification = "Product was successfully created"


    before (async function() {
        await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/#");
        });
       
        it ("Should login with valid data", async function () {
            await $(email).setValue(emailSelector);
            await $(passwordSelector).setValue(password);
            await $(loginbuttonSelector).click();
            await expect($(homePageHeaderSelector)).toHaveText(
                homePageHeaderText
              );
            });

it("Should create product", async function (){
  await $(productsButtonSelector).click();
await browser.waitUntil(async ()=>{
    const result = !(await $(startProductPageSelector).isDisplayed());
    return result;
},
{timeout: 30000,
    timeoutMsg: `Spinners are still displayed on page after 30 seconds`,
});
await $(addProductButtonSelector).click();

async function fillInputs(product: IProduct) {
    await this.setValue(this($(addNewProductInputSelector)), product.name);
    await this.selectDropdownValue(this($(addNewProductManufacturerSelector)), product.manufacturer);
    await this.setValue(this($(addNewProductPriceSelector)), product.price);
    await this.setValue(this($(addNewProductAmountSelector)), product.amount);
    
    if (product.notes) {
        await this.setValue(this($(addNewProductNotesSelector)), product.notes);
    }
};

function generateProductData(customData?: Partial<IProduct>): IProduct {
    return {
        name: "Test Product " + Date.now(),
        manufacturer: "Samsung",
        amount: 100,
        price: 3000,
        notes: "Test notes",
        ...customData,
    };
};

async function createProduct(customData?: Partial<IProduct>) {
    const productData = generateProductData(customData);
    await fillInputs(productData);
};

await $(saveProductButtonSelector).click();
});
        

it("Should verify notification text", async function () {
await $(createdNotificationSelector).isDisplayed();
const actualText = await $(createdNotificationSelector).getText();
    expect(actualText).toBe(productCreatedNotification); 
    await $(closeCrossOnSuccessNotificationSelector).click();     
});

it("Should verify new product", async function () {
    async getProductFromTable(productName: string) {
        const productFromTable = {
          name: await this.getText(this["Product Name in table"](productName)),
          price: await this.getText(this["Product Price in table"](productName)),
          manufacturer: await this.getText(this["Product Manufacturer in table"](productName)),
          createdOn: await this.getText(this["Product Creation Date in table"](productName)),
        };
            
        return {
          name,
          price: +price.replace("$", ""),
          manufacturer,
        };
      }
    
})
})





