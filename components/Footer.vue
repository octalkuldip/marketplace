<script setup>
</script>
<style>
.nav-items li {
    color: rgb(95, 93, 93);
}
.nav-items li a {
    font-family: sans-serif;
}
.map-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
  }
  
  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: 480px) {
    .map-container {
      padding-top: 75%; /* 4:3 Aspect Ratio */
    }
  }
</style>

<template>
    <section>
        <div class="bg-[#F8F8F8]">
            <div class="p-3">
                <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 p-10">
                    <!-- fist div -->
                    <div class="flex flex-col gap-5">
                        <div>
                            <div class="flex gap-4 items-center">
                                <img src="https://cdn.dotpe.in/longtail/store-logo/4360524/sbWOzHRh.jpeg" alt=""
                                    class="w-16 ">
                                <h2 class="font-semibold text-2xl">eDehati</h2>
                            </div>
                            <div class="space-y-1">
                                <p class="text-sm text-gray-800" style="font-family:sans-serif;">Subscribe for latest updates & offers</p>
                                <div class="flex">
                                    <input
                                        class="border-2 border-gray-200 py-1 px-4 max-w-xs w-full placeholder:text-base  focus:outline-none placeholder:text-gray-700 font-normal"
                                        type="text" placeholder="Enter Phone Number" />
                                    <button class="bg-[#F77F34] font-semibold text-white py-1 px-4" type="submit">
                                        <svg fill="#FFF" width="16" height="16" viewBox="0 0 15 15"
                                            xmlns="http://www.w3.org/2000/svg" id="arrow">
                                            <path
                                                d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-5">
                            <h3 class="font-semibold">About Us</h3>
                            <p class="text-sm" style="font-family:sans-serif;">eDehati.com is a venture to provide Sales & Marketing support to the
                                small and marginal
                                farmers and women SHG memebers, producing processed & unprocessed farm p...</p>
                        </div>
                    </div>
                    <!-- secound div -->
                    <div class="flex flex-col gap-3">
                        <div>
                            <ul class="nav-items">
                                <li><a href="" class="hover:border-b hover:border-gray-500 duration-200">Home</a></li>
                                <li><a href="#" class="hover:border-b hover:border-gray-500 duration-200">Shop</a></li>
                                <li><a href="#" class="hover:border-b hover:border-gray-500 duration-200">Himrla</a></li>
                                <li><a href="#" class="hover:border-b hover:border-gray-500 duration-200">About EDehati</a></li>
                                <li><a href="##" class="hover:border-b hover:border-gray-500 duration-200">Dehati Blogger</a></li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div>
                            <p style="font-family:sans-serif;" class="text-sm"><a class="flex items-center gap-1" href="mailto:edehatifpc@gmail.com">
                                    <svg  fill="#000000" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                        viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                                        <g>
                                            <path d="M24.9,30.1c0.6,0.6,1.5,0.6,2.1,0l22.6-21C50,8.3,49.9,7,48.3,7L3.6,7.1c-1.2,0-2.2,1.1-1.3,2.1L24.9,30.1z
		" />
                                            <path d="M50,17.3c0-1-1.2-1.6-2-0.9L30.3,32.7c-1.2,1.1-2.7,1.7-4.3,1.7s-3.1-0.6-4.3-1.6L4.1,16.4
		c-0.8-0.7-2-0.2-2,0.9C2,17,2,40,2,40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4C50,34,50,21.8,50,17.3z" />
                                        </g>
                                    </svg>
                                    edehatifpc@gmail.com
                                </a></p>
                            <p class="text-sm items-center inline-flex gap-1">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                                        fill="currentColor" />
                                    <path
                                        d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                                        fill="currentColor" />
                                    <path
                                        d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                                        fill="currentColor" />
                                </svg>
                                7303403222
                            </p>
                        </div>
                    </div>

                    <!-- third div -->
                    <div>
                        <div class="flex gap-5 flex-col">
                            <p class="font-semibold">Visit Us</p>
                            <p class="text-sm" style="font-family:sans-serif;">Emerging Dehati, Kalka Shimla Rd, Boiluganj, Shimla, Boiluganj, Shimla ,
                                Himachal
                                Pradesh, 171005</p>
                        </div>
                    </div>

                    <!-- four div -->

                    <div class="flex flex-col gap-4">
                        <h3 class="font-semibold">Follow us here</h3>
                        <div class="flex gap-3">
                            <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                fill="none">
                                <path fill="#1877F2"
                                    d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" />
                                <path fill="#ffffff"
                                    d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" />
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 14 14" role="img" focusable="false"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg">

                                <radialGradient id="a" cx="130.802" cy="895.86902" r="968.776"
                                    gradientTransform="matrix(.539 -.842 .618 .395 -492.923 652.145)"
                                    gradientUnits="userSpaceOnUse">

                                    <stop offset="0" stop-color="#F9ED32" />

                                    <stop offset=".53" stop-color="#FF4700" />

                                    <stop offset=".72" stop-color="#EE2A7B" />

                                    <stop offset="1" stop-color="#002AFF" />

                                </radialGradient>

                                <path fill="url(#a)"
                                    d="M43.7 180h524.6c24.2 0 43.7 19.6 43.7 43.7v524.6c0 24.2-19.6 43.7-43.7 43.7H43.7C19.6 792 0 772.4 0 748.3V223.7C0 199.6 19.6 180 43.7 180z"
                                    transform="translate(1.000001 -2.5294102) scale(.0196)" />

                                <g fill="#ffffff" stroke="#ffffff" stroke-miterlimit="10"
                                    transform="translate(1.000001 -2.5294102) scale(.0196)">

                                    <path stroke-width="8"
                                        d="M413.9 721.5H198.1c-70.3 0-127.6-57.2-127.6-127.6V378.1c0-70.3 57.2-127.6 127.6-127.6H414c70.3 0 127.6 57.2 127.6 127.6V594c-.1 70.3-57.3 127.5-127.7 127.5zM198.1 289.8c-48.7 0-88.3 39.6-88.3 88.3V594c0 48.7 39.6 88.3 88.3 88.3H414c48.7 0 88.3-39.6 88.3-88.3V378.1c0-48.7-39.6-88.3-88.3-88.3H198.1zm107.9 314c-64.9 0-117.8-52.8-117.8-117.8 0-64.9 52.8-117.8 117.8-117.8 64.9 0 117.8 52.8 117.8 117.8 0 64.9-52.9 117.8-117.8 117.8zm0-196.3c-43.3 0-78.5 35.2-78.5 78.5s35.2 78.5 78.5 78.5 78.5-35.2 78.5-78.5-35.2-78.5-78.5-78.5z" />

                                    <circle cx="427.70001" cy="364.29999" r="25" stroke-width="9" />
                                </g>

                            </svg>
                            <!-- --whatapp svg -->
                            <svg width="25" height="25" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                                    fill="#BFC8D0" />
                                <path
                                    d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                                    fill="url(#paint0_linear_87_7264)" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                                    fill="white" />
                                <path
                                    d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                                    fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#5BD066" />
                                        <stop offset="1" stop-color="#27B43E" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <!-- --YouTube svg    -->
                            <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                fill="none">
                                <path fill="red"
                                    d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z" />
                                <path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z" />
                            </svg>
                        </div>
                    </div>

                    <!-- five div -->
                    <div class="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7437.512671406587!2d72.85105675387572!3d21.241508821209944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721903802537!5m2!1sen!2sin"
                            width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Slider /> -->
    </section>
</template>
