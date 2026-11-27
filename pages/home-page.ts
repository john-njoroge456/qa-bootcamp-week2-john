import {Page, Locator} from '@playwright/test';
export class Homepage{
    readonly page:Page;
    readonly searchBox:Locator;
    readonly searchButton:Locator;
    readonly productName:Locator;
    readonly sortDropdown: Locator;
    readonly productPrices: Locator;
    readonly sortingCompleted: Locator;
    
    
    constructor (page:Page){
    this.page=page;
    this.searchBox=page.getByRole('textbox',{name:'Search'});
    this.searchButton=page.getByRole('button',{name:'Search'});
    this.productName=page.locator('[data-test="product-name"]');
    this.sortDropdown = page.getByRole('combobox', { name: 'sort' });
    this.productPrices = page.locator('[data-test="product-price"]');
    this.sortingCompleted = page.locator('[data-test="sorting_completed"]');

    }
    async goto(){
        await this.page.goto('/');
    }  
    async search(term: string){
        await this.searchBox.fill(term);
        await this.searchButton.click();
        
    }
    async sortBy(option: string) {
        await this.sortDropdown.selectOption({ label: option });
    }
    async getPrices(): Promise<number[]> {
        const texts = await this.productPrices.allTextContents();
        return texts.map(text => Number(text.replace(/[^0-9.]/g, '')));
    }
    searchResults (term :string): Locator {
        return this.page.getByText(`Searched for: ${term}`);
    }
}