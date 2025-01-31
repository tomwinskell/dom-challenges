const obj = {
        type: "article",
        attributes: { id: "blog-post", class: "post" },
        children: [
          {
            type: "header",
            children: [
              {
                type: "h1",
                children: ["Understanding JavaScript"],
              },
              {
                type: "p",
                children: ["Posted on: January 1, 2024"],
              },
            ],
          },
          {
            type: "section",
            children: [
              {
                type: "h2",
                children: ["Introduction"],
              },
              {
                type: "p",
                children: [
                  "JavaScript is a versatile language widely used for web development. In this article, we will explore its core features and capabilities.",
                ],
              },
            ],
          },
          {
            type: "section",
            children: [
              {
                type: "h2",
                children: ["Features"],
              },
              {
                type: "ul",
                children: [
                  {
                    type: "li",
                    children: ["Dynamic typing"],
                  },
                  {
                    type: "li",
                    children: ["Prototype-based inheritance"],
                  },
                  {
                    type: "li",
                    children: ["First-class functions"],
                  },
                  {
                    type: "li",
                    children: ["Event-driven programming"],
                  },
                ],
              },
            ],
          },
          {
            type: "footer",
            children: [
              {
                type: "p",
                children: ["Thank you for reading!"],
              },
            ],
          },
        ],
      };

function createDom(obj) {
  function buildElement(obj) {
    const newElement = document.createElement(obj.type);
    if (obj.attributes) {
      for (const key in obj.attributes) {
        const a = document.createAttribute(key);
        a.value = obj.attributes[key];
        newElement.setAttributeNode(a);
      }
    }
    if (obj.children) {
      console.log(typeof obj.children, obj.children);
      if (typeof obj.children[0] === 'string') {
        const newContent = document.createTextNode(obj.children)
        console.log('Content is:', newContent);
        newElement.appendChild(newContent);
      } else {
        obj.children.forEach(element => {
          const child = buildElement(element);
          newElement.appendChild(child);
        });
      }
    }
    return newElement;
  }
  document.body.appendChild(buildElement(obj));
}

createDom(obj);