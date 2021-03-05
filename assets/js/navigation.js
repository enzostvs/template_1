class myNavigation extends HTMLElement {
    constructor() {
        super();
        // const paths = window.location.pathname.split('/')
        // this.path = paths[paths.length - 1].replace('.html', '')
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <nav class="container mx-auto px-3 mt-4 md:mt-8 flex items-center justify-between">
                <div class="flex items-center">
                    <img src="./assets/images/logo.svg" alt="Logo company" class="w-12 mr-2">
                    <p class="carmen text-white font-normal text-lg tracking-widest">Company Logo</p>
                </div>
                <ul class="m-0 p-0 hidden md:flex items-center justify-end">
                    <li class="mr-14">
                        <a href="#about" class="carmen text-white text-opacity-50 hover:text-opacity-100 transition duration-200 font-normal text-base">
                            About
                        </a>
                    </li>
                    <li class="mr-14">
                        <a href="#products" class="carmen text-white text-opacity-50 hover:text-opacity-100 transition duration-200 font-normal text-base">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#download" class="carmen text-white hover:text-opacity-100 transition duration-200 font-normal text-base">
                            Download
                        </a>
                    </li>
                </ul>
            </nav>
        `
    }
}
customElements.define('my-navigation', myNavigation)