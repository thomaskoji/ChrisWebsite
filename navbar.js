export class MyNavbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div id="page_menu" class="flex">
                <button data-href="index" data-i18n="nav_index"></button>
                <!--
                <button data-href="about" data-i18n="nav_about"></button>
                <button data-href="photo" data-i18n="nav_photo"></button>
                -->
                <button data-href="contact" data-i18n="nav_contact"></button>
            </div>
            <div id="lang_menu" class="flex">
                <button class="lang-btn" data-lang="en">English　</button>
                <button class="lang-btn" data-lang="jp">日本語　</button>
            </div>
        `;
    }
}