import {Page, Locator} from '@playwright/test';
export class Homepage{
    readonly page:Page;
    readonly searchBox:Locator;
    readonly searchButton:Locator;
    readonly productName:Locator;
    
    constructor (page:Page){
    this.page=page;
    this.searchBox=page.getByRole('textbox',{name:'Search'});
    this.searchButton=page.getByRole('button',{name:'Search'});
    this.productName=page.locator('[data-test="product-name"]');

    }
    async goto(){
        await this.page.goto('/');
    }  
    async search(term: string){
        await this.searchBox.fill(term);
        await this.searchButton.click();
        
    }
    seachResults (term :string): Locator {
        return this.page.getByText(`Searched for: ${term}`);
    }
}