(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{460:function(e,s,t){"use strict";t.r(s);var a=t(51),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"示例-使用secret配置dataset敏感信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-使用secret配置dataset敏感信息"}},[e._v("#")]),e._v(" 示例 - 使用Secret配置Dataset敏感信息")]),e._v(" "),t("p",[e._v("在Fluid中创建Dataset时，有时候我们需要在"),t("code",[e._v("mounts")]),e._v("中配置一些敏感信息，为了保证安全，Fluid提供使用Secret来配置这些敏感信息的能力。下面以访问"),t("a",{attrs:{href:"https://cn.aliyun.com/product/oss",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云OSS"),t("OutboundLink")],1),e._v("数据集为例说明如何配置。")]),e._v(" "),t("h2",{attrs:{id:"创建带敏感信息的dataset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建带敏感信息的dataset"}},[e._v("#")]),e._v(" 创建带敏感信息的Dataset")]),e._v(" "),t("h3",{attrs:{id:"创建dataset和runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建dataset和runtime"}},[e._v("#")]),e._v(" 创建Dataset和Runtime")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" dataset.yaml")]),e._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: mydata\nspec:\n  mounts:\n  - mountPoint: oss://<OSS_BUCKET>/<OSS_DIRECTORY>/\n    name: mydata\n    options:\n      fs.oss.endpoint: <OSS_ENDPOINT>\n    encryptOptions:\n      - name: fs.oss.accessKeyId\n        valueFrom:\n          secretKeyRef:\n            name: mysecret\n            key: fs.oss.accessKeyId\n      - name: fs.oss.accessKeySecret\n        valueFrom:\n          secretKeyRef:\n            name: mysecret\n            key: fs.oss.accessKeySecret\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: mydata\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),e._v("\n")])])]),t("p",[e._v("可以看到，在上面的配置中，与直接配置"),t("code",[e._v("fs.oss.endpoint")]),e._v("不同，我们把"),t("code",[e._v("fs.oss.accessKeyId")]),e._v("以及"),t("code",[e._v("fs.oss.accessKeySecret")]),e._v("的配置改为从Secret中读取，以此来保障安全性。")]),e._v(" "),t("blockquote",[t("p",[e._v("需要注意的是，如果在"),t("code",[e._v("options")]),e._v("和"),t("code",[e._v("encryptOptions")]),e._v("中配置了同名的键，例如都有"),t("code",[e._v("fs.oss.accessKeyId")]),e._v("的配置，那么"),t("code",[e._v("encryptOptions")]),e._v("中的值会覆盖"),t("code",[e._v("options")]),e._v("中对应的值。")])]),e._v(" "),t("h3",{attrs:{id:"创建secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建secret"}},[e._v("#")]),e._v(" 创建Secret")]),e._v(" "),t("p",[e._v("在要创建的Secret中，需要写明在上面创建Dataset时需要配置的敏感信息。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("mysecret.yaml")]),e._v("\napiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret\nstringData:\n  fs.oss.accessKeyId: <OSS_ACCESS_KEY_ID>\n  fs.oss.accessKeySecret: <OSS_ACCESS_KEY_SECRET>\nEOF")]),e._v("\n")])])]),t("p",[e._v("可以看到，"),t("code",[e._v("fs.oss.accessKeySecret")]),e._v("和"),t("code",[e._v("fs.oss.accessKeyId")]),e._v("的具体内容写在Secret中，Dataset通过寻找配置中同名的Secret和key来读取对应的值，而不再是在Dataset直接写明，这样就保证了一些数据的安全性。")])])}),[],!1,null,null,null);s.default=n.exports}}]);