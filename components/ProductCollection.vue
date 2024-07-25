<template>
    <section class="sticky top-0 h-full overflow-y-scroll">
      <div class="p-4">
        <div class="space-y-4">
          <!-- Close Button -->
          <div class="flex justify-start">
           <button class="bg-rose-100 text-rose-950 p-2 px-3 rounded-lg font-bold w-full">filters</button>
          </div>
  
          <!-- Sort By -->
          <div>
            <div class="flex flex-col justify-between">
              <button class="flex items-center space-x-2">
                <span>Sort by</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </button>
              <ul class="space-y-2 mt-2">
                <li><button class="w-full text-left">Featured</button></li>
                <li><button class="w-full text-left">Best Selling</button></li>
                <li><button class="w-full text-left">Price, Low to High</button></li>
                <li><button class="w-full text-left">Price, High to Low</button></li>
                <li><button class="w-full text-left">Alphabetically, A-Z</button></li>
                <li><button class="w-full text-left">Alphabetically, Z-A</button></li>
                <li><button class="w-full text-left">Date, Old to New</button></li>
                <li><button class="w-full text-left">Date, New to Old</button></li>
              </ul>
            </div>
          </div>
  
          <!-- Product Line -->
          <div>
            <div class="flex flex-col justify-between">
              <h5 class="flex items-center space-x-2">
                <span>Product Line</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </h5>
              <div class="space-y-2 mt-2">
                <div class="flex items-center">
                  <input type="checkbox" id="select" class="mr-2" />
                  <label for="select" class="flex items-center">
                    <span>Protein Powders</span>
                    <span class="ml-2">(28)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="select-1" class="mr-2" />
                  <label for="select-1" class="flex items-center">
                    <span>Product Bundles</span>
                    <span class="ml-2">(11)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Flavor -->
          <div>
            <div class="flex flex-col justify-between">
              <h5 class="flex items-center space-x-2">
                <span>Flavor</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </h5>
              <div class="space-y-2 mt-2">
                <div class="flex items-center">
                  <input type="checkbox" id="flavor-1" class="mr-2" />
                  <label for="flavor-1" class="flex items-center">
                    <span>Chocolate</span>
                    <span class="ml-2">(12)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="flavor-2" class="mr-2" />
                  <label for="flavor-2" class="flex items-center">
                    <span>Vanilla</span>
                    <span class="ml-2">(8)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Brand -->
          <div>
            <div class="flex flex-col justify-between">
              <h5 class="flex items-center space-x-2">
                <span>Brand</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </h5>
              <div class="space-y-2 mt-2">
                <div class="flex items-center">
                  <input type="checkbox" id="brand-1" class="mr-2" />
                  <label for="brand-1" class="flex items-center">
                    <span>Brand A</span>
                    <span class="ml-2">(20)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="brand-2" class="mr-2" />
                  <label for="brand-2" class="flex items-center">
                    <span>Brand B</span>
                    <span class="ml-2">(15)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Price Range -->
          <div>
            <div class="flex flex-col justify-between">
              <h5 class="flex items-center space-x-2">
                <span>Price Range</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </h5>
              <div class="mt-2">
                <input type="range" min="0" max="100" value="50" class="w-full" />
                <div class="flex justify-between text-xs mt-2">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Ratings -->
          <div>
            <div class="flex flex-col justify-between">
              <h5 class="flex items-center space-x-2">
                <span>Ratings</span>
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7102 14.7099C16.6172 14.8037 16.5066 14.8781 16.3848 14.9288C16.2629 14.9796 16.1322 15.0057 16.0002 15.0057C15.8682 15.0057 15.7375 14.9796 15.6156 14.9288C15.4937 14.8781 15.3831 14.8037 15.2902 14.7099L12.0002 11.4099L8.71019 14.7099C8.52188 14.8982 8.26649 15.004 8.00019 15.004C7.73388 15.004 7.47849 14.8982 7.29019 14.7099C7.10188 14.5216 6.99609 14.2662 6.99609 13.9999C6.99609 13.8681 7.02207 13.7375 7.07253 13.6157C7.12299 13.4939 7.19695 13.3832 7.29019 13.2899L11.2902 9.28994C11.3831 9.19621 11.4937 9.12182 11.6156 9.07105C11.7375 9.02028 11.8682 8.99414 12.0002 8.99414C12.1322 8.99414 12.2629 9.02028 12.3848 9.07105C12.5066 9.12182 12.6172 9.19621 12.7102 9.28994L16.7102 13.2899C16.8039 13.3829 16.8783 13.4935 16.9291 13.6154C16.9798 13.7372 17.006 13.8679 17.006 13.9999C17.006 14.132 16.9798 14.2627 16.9291 14.3845C16.8783 14.5064 16.8039 14.617 16.7102 14.7099Z"
                    fill="black"
                  />
                </svg>
              </h5>
              <div class="space-y-2 mt-2">
                <div class="flex items-center">
                  <input type="checkbox" id="rating-1" class="mr-2" />
                  <label for="rating-1" class="flex items-center">
                    <span>⭐️ 5</span>
                    <span class="ml-2">(10)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="rating-2" class="mr-2" />
                  <label for="rating-2" class="flex items-center">
                    <span>⭐️ 4</span>
                    <span class="ml-2">(5)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="rating-3" class="mr-2" />
                  <label for="rating-3" class="flex items-center">
                    <span>⭐️ 3</span>
                    <span class="ml-2">(3)</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input type="checkbox" id="rating-4" class="mr-2" />
                  <label for="rating-4" class="flex items-center">
                    <span>⭐️ 2</span>
                    <span class="ml-2">(1)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </section>
</template>

<script setup>

</script>

<style scoped></style>