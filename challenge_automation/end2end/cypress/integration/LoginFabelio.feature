Feature: ADD TO CART RESULT SEARCH PRODUK FABELIO WEBSITE

    Scenario: Search Produk and Add to Cart
        Given I Open Home Page website QA FABELIO
        Then I search "Cessi" from searchbox product
        And I choose product "Cessi Dining Chair"
        # And I click TambahKeranjang for AddToCart
