Feature: ADD TO CART RESULT SEARCH PRODUK FABELIO WEBSITE
    @searchProduk
    Scenario: Search Produk and Add to Cart
        Given I Open Home Page website QA FABELIO
        Then I search "Cessi" from searchbox product
        And I choose product "Cessi Chair"
        And I click TambahKeranjang for AddToCart

    @searchProduk
    Scenario: Search Single Produk and Add to Cart
        Given I Open Home Page website QA FABELIO
        Then I search "Kursi Kantor Alpha" from searchbox product
        And I choose single product
        And I click TambahKeranjang for AddToCart

    @searchProdukCSV
    Scenario: Search Random Produk from CSV and Add to Cart
        Given I Open Home Page website QA FABELIO
        Then I search produk from CSV and Process Add To Cart