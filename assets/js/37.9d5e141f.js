(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{510:function(t,a,s){"use strict";s.r(a);var e=s(51),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"demo-speed-up-accessing-minio-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo-speed-up-accessing-minio-files"}},[t._v("#")]),t._v(" DEMO - Speed Up Accessing Minio Files")]),t._v(" "),s("p",[t._v("Start a standalone Minio locally as a remote S3 service. This example is for demonstration purposes only, not production")]),t._v(" "),s("h3",{attrs:{id:"start-minio-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-minio-demo"}},[t._v("#")]),t._v(" start minio demo")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker run -ti -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v(":9000 --name minio minio/minio server /data\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Endpoint: http://172.17.0.8:9000  http://127.0.0.1:9000 \nRootUser: minioadmin \nRootPass: minioadmin \n\nBrowser Access:\n   http://172.17.0.8:9000  http://127.0.0.1:9000\n\nCommand-line Access: https://docs.min.io/docs/minio-client-quickstart-guide\n   $ mc alias set myminio http://172.17.0.8:9000 minioadmin minioadmin\n\nObject API (Amazon S3 compatible):\n   Go:         https://docs.min.io/docs/golang-client-quickstart-guide\n   Java:       https://docs.min.io/docs/java-client-quickstart-guide\n   Python:     https://docs.min.io/docs/python-client-quickstart-guide\n   JavaScript: https://docs.min.io/docs/javascript-client-quickstart-guide\n   .NET:       https://docs.min.io/docs/dotnet-client-quickstart-guide\nDetected default credentials 'minioadmin:minioadmin', please change the credentials immediately using 'MINIO_ROOT_USER' and 'MINIO_ROOT_PASSWORD'\nIAM initialization complete\n")])])]),s("h3",{attrs:{id:"mock-minio-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-minio-data"}},[t._v("#")]),t._v(" mock minio data")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a new bucket")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mc")]),t._v(" mb myminio/fluid\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# there are some PDFs in my local folder fluid")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" fluid/* myminio/fluid/\n")])])]),s("h3",{attrs:{id:"dataset-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset-yaml"}},[t._v("#")]),t._v(" dataset.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//spark/fluid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" spark\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("minio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.disable.dns.buckets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alluxio.underfs.s3.inherit.acl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encryptOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.accessKeyId\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.accessKeyId\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.secretKey\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws.secretKey\n")])])]),s("h3",{attrs:{id:"secret-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secret-yaml"}},[t._v("#")]),t._v(" secret.yaml")]),t._v(" "),s("p",[t._v("create minio accessKeyId and accessKey")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysecret\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws.accessKeyId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minioadmin\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws.secretKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minioadmin\n")])])]),s("h3",{attrs:{id:"runtime-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtime-yaml"}},[t._v("#")]),t._v(" runtime.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20M\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("high")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.95"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("low")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.7"')]),t._v("\n")])])]),s("h3",{attrs:{id:"pod-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pod-yaml"}},[t._v("#")]),t._v(" pod.yaml")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo\n")])])]),s("h3",{attrs:{id:"check-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-the-data"}},[t._v("#")]),t._v(" check the data")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ k apply -f dataset.yaml\n$ k apply -f secret.yaml\n$ k apply -f runtime.yaml\n$ k apply -f pod.yaml\n$ k "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -ti demo-app "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" \n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /data\ndata-mesh-in-practice-how-europes-leading-online-platform-for-fashion-goes-beyond-the-data-lake-iteblog.com.pdf\ndata-science-across-data-sources-with-apache-arrow-iteblog.com.pdf\nfrom-hdfs-to-s3-migrate-pinterest-apache-spark-clusters-iteblog.com.pdf\nrunning-apache-spark-jobs-using-kubernetes-iteblog.com.pdf\nrunning-apache-spark-on-kubernetes-best-practices-and-pitfalls-iteblog.com.pdf\nscaling-data-and-ml-with-apache-spark-and-feast-iteblog.com.pdf\nusing-ai-to-support-proliferating-merchant-changes-iteblog.com.pdf\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);