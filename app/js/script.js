let app = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      message: "Vue is working properly",
      pages: [
        {
          link: { text: "Home", url: "index.html" },
          pageTitle: "Home Page",
          content: "This is the home content",
        },
        {
          link: { text: "About", url: "about.html" },
          pageTitle: "About Page",
          content: "This is the about content",
        },
        {
          link: { text: "Contact", url: "contact.html" },
          pageTitle: "Contact Page",
          content: "This is the contact content",
        },
      ],
    };
  },
});

app.component("navbar", {
  props: ["pages", "activeIndex", "navLinkClick"],
  template: `<nav :class="[\`navbar-\${theme}\`,\`bg-\${theme}\`,'navbar','navbar-expand-lg']">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(page , index) in pages " class="nav-item">
            <a
              class="nav-link"
              :class="{active : activeIndex == index}"
              v-bind:href="page.link.url"
              @click.prevent="navLinkClick"
              :title="\`This is \${page.pageTitle}\`"
              v-on:click="navLinkClick(index)"
              >{{page.link.text}}</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <button @click.prevent="changeTheme()" class="btn btn-primary">
            Toogle mode
          </button>
        </form>
      </div>
    </nav>`,
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
    },
  },
});

app.component("page-viewer", {
  props: ["page"],
  template: `
  <div id="content">
      <h1>{{page.pageTitle}}</h1>
      <p>{{page.content}}</p>
    </div>
  `,
});

app.mount("body");
