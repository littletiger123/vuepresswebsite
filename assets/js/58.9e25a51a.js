(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{526:function(s,a,t){"use strict";t.r(a);var e=t(51),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"fluid开发文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid开发文档"}},[s._v("#")]),s._v(" Fluid开发文档")]),s._v(" "),t("h2",{attrs:{id:"环境需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境需求"}},[s._v("#")]),s._v(" 环境需求")]),s._v(" "),t("ul",[t("li",[s._v("Git")]),s._v(" "),t("li",[s._v("Golang (version >= 1.13)")]),s._v(" "),t("li",[s._v("Docker (version >= 19.03)")]),s._v(" "),t("li",[s._v("Kubernetes (version >= 1.14)")]),s._v(" "),t("li",[s._v("GNU Make")])]),s._v(" "),t("p",[s._v("对于Golang的安装与配置，请参考"),t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("对于Docker的安装与配置，请参考"),t("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("Fluid需要使用"),t("code",[s._v("make")]),s._v("命令进行项目构建，使用以下命令安装"),t("code",[s._v("make")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("Linux\n"),t("ul",[t("li",[t("code",[s._v("sudo apt-get install build-essential")])])])])]),s._v(" "),t("h2",{attrs:{id:"编译、运行和调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译、运行和调试"}},[s._v("#")]),s._v(" 编译、运行和调试")]),s._v(" "),t("h3",{attrs:{id:"安装controller-gen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装controller-gen"}},[s._v("#")]),s._v(" 安装"),t("code",[s._v("controller-gen")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.3.0\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/controller-gen /usr/local/bin/\n")])])]),t("p",[s._v("通过以上方式安装"),t("code",[s._v("controller-gen")]),s._v("时，如果出现如下错误：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go: cannot use path@version syntax "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" GOPATH mode\n")])])]),t("p",[s._v("你需要在执行安装之前，首先设置GO111MODULE=on：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n")])])]),t("p",[s._v("安装完成后，删除环境变量GO111MODULE：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" GO111MODULE\n")])])]),t("h3",{attrs:{id:"获取fluid源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取fluid源码"}},[s._v("#")]),s._v(" 获取Fluid源码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/fluid-cloudnative/\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/fluid-cloudnative\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/fluid-cloudnative/fluid.git\n")])])]),t("blockquote",[t("p",[t("strong",[s._v("注意")]),s._v("：本文在非Go Module模式下完成Fluid的编译、运行和调试。")]),s._v(" "),t("p",[s._v("有关Go module可以参阅 "),t("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("Golang 官方文档"),t("OutboundLink")],1),s._v(" 获取更多信息。")])]),s._v(" "),t("h3",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),t("p",[s._v("Fluid项目根目录下的"),t("code",[s._v("Makefile")]),s._v("文件已经包含了项目开发中的编译、构建、部署等基本逻辑")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建dataset-controller, alluxioruntime-controller和csi Binary")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" build\n")])])]),t("p",[s._v("构建得到的Binary程序位于"),t("code",[s._v("./bin")]),s._v("目录下。")]),s._v(" "),t("h3",{attrs:{id:"镜像构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建"}},[s._v("#")]),s._v(" 镜像构建")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("设置镜像名称")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为dataset-controller镜像命名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATASET_CONTROLLER_IMG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为alluxioruntime-controller镜像命名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALLUXIORUNTIME_CONTROLLER_IMG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为CSI插件镜像命名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CSI_IMG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("csi-img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为init-user镜像命名")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INIT_USERS_IMG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("csi-img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("在运行Fluid之前，需要构建镜像并推送到可以访问的镜像仓库中")])]),s._v(" "),t("li",[t("p",[s._v("登录镜像仓库：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker login "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("docker-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("构建镜像然后推送到仓库:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" docker-push-all\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("接下来的内容将假设在本地环境中已经通过"),t("code",[s._v("KUBECONFIG")]),s._v("环境变量或是在"),t("code",[s._v("~/.kube/config")]),s._v("文件中配置好了可以访问的Kubernetes集群，您可以通过"),t("code",[s._v("kubectl cluster-info")]),s._v("对该配置进行快速检查。更多有关"),t("code",[s._v("kubeconfig")]),s._v("的信息可以参考 "),t("a",{attrs:{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kubernetes官方文档"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("以下内容将使用"),t("code",[s._v("kustomize")]),s._v("，"),t("code",[s._v("kubectl 1.14+")]),s._v("已经内置了"),t("code",[s._v("kustomize")]),s._v("工具，正在使用"),t("code",[s._v("kubectl 1.14")]),s._v("版本以下的开发者请参考 "),t("a",{attrs:{href:"https://kustomize.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v(" 获取有关kustomize的更多信息")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("将构建的镜像上传到Kubernetes集群可以访问的镜像仓库")]),s._v(" "),t("blockquote",[t("p",[s._v("如果构建并上传的镜像在私有仓库中，请确保在kubernetes集群的各个结点上已经成功执行了"),t("code",[s._v("sudo docker login <docker-registry>")]),s._v("操作")])])]),s._v(" "),t("li",[t("p",[s._v("修改"),t("code",[s._v("config/fluid/patches")]),s._v("中各文件的镜像名")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config/fluid/patches/controller/injections_in_alluxioruntime_controller.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncontainers:\n  - name: manager\n    image: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    env:\n      - name: DEFAULT_INIT_IMAGE_ENV\n\t    value: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config/fluid/patches/controller/injections_in_data_controller.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncontainers:\n  - name: manager\n    image: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config/fluid/patches/csi/injections_in_csi_plugin.yaml")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ncontainers:\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# change the following two images if necessary")]),s._v("\n  - name: node-driver-registrar\n    image: registry.cn-hangzhou.aliyuncs.com/acs/csi-node-driver-registrar:v1.2.0\n  - name: plugins\n    image: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img-tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建CRD")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl apply -k config/crd\n")])])]),t("p",[s._v("检查CRD：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get crd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" fluid\nalluxioruntimes.data.fluid.io       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-11-28T06:20:36Z\ndataloads.data.fluid.io             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-11-28T06:20:36Z\ndatasets.data.fluid.io              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-11-28T06:20:36Z\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建Fluid各组件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl apply -k config/fluid\n")])])]),t("p",[s._v("检查Fluid组件：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get pod -n fluid-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5f9d4b899f-6h8xp   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          8s\ncsi-nodeplugin-fluid-hngkl                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          8s\ndataset-controller-6bcf4fc7b9-9rm84          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          8s\n")])])])]),s._v(" "),t("li",[t("p",[s._v("编写样例或使用提供的样例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl apply -k config/samples\n")])])]),t("p",[s._v("检查样例pod：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get pod\nNAME                   READY   STATUS    RESTARTS   AGE\ndataset-fuse-5sz2c             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          61s\ndataset-master-0               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          93s\ndataset-worker-nbvrm           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          61s\net-operator-769b7864d4-glk7v   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          11d\nnginx-0                        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2m3s\n")])])]),t("blockquote",[t("p",[s._v("注意: 上述命令可能随您组件的不同实现或是不同的样例产生不同的结果。")])])]),s._v(" "),t("li",[t("p",[s._v("通过日志等方法查看您的组件是否运作正常")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl logs -n fluid-system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("controller_manager_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("环境清理")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl delete -k config/samples\n$ kubectl delete -k config/fluid\n$ kubectl delete -k config/crd\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[s._v("#")]),s._v(" 单元测试")]),s._v(" "),t("h4",{attrs:{id:"基本测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本测试"}},[s._v("#")]),s._v(" 基本测试")]),s._v(" "),t("p",[s._v("在项目根目录下执行如下命令运行基本单元测试(工具类测试和engine测试)：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" unit-test\n")])])]),t("h4",{attrs:{id:"集成测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[s._v("#")]),s._v(" 集成测试")]),s._v(" "),t("p",[t("code",[s._v("kubebuilder")]),s._v("基于"),t("a",{attrs:{href:"https://godoc.org/sigs.k8s.io/controller-runtime/pkg/envtest",target:"_blank",rel:"noopener noreferrer"}},[s._v("envtest"),t("OutboundLink")],1),s._v("提供了controller测试的基本框架，如果您想运行controller测试，您需要执行如下命令安装"),t("code",[s._v("kubebuilder")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("os")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" GOOS"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" GOARCH"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://go.kubebuilder.io/dl/2.3.1/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${os}")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${arch}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xz -C /tmp/\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /tmp/kubebuilder_2.3.1_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${os}")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${arch}")]),s._v(" /usr/local/kubebuilder\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/kubebuilder/bin\n")])])]),t("p",[s._v("接下来，您可以在项目根目录下运行所有的单元测试：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("如果您在macOS等非linux系统开发，运行测试时若提示"),t("code",[s._v("exec format error")]),s._v("，则需要检查运行测试命令时是否设置了与开发环境不一致的"),t("code",[s._v("GOOS")]),s._v("。")])]),s._v(" "),t("h3",{attrs:{id:"调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[s._v("#")]),s._v(" 调试")]),s._v(" "),t("p",[t("strong",[s._v("前提条件")])]),s._v(" "),t("p",[s._v("确保环境中已经安装了go-delve，具体安装过程可以参考"),t("a",{attrs:{href:"https://github.com/go-delve/delve/tree/master/Documentation/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-delve安装手册"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("strong",[s._v("本地调试")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ dlv debug cmd/alluxio/main.go\n")])])]),t("p",[t("strong",[s._v("远程调试")]),s._v(" 在开发Fluid时，通常情况下更为常用的方式是远程调试，确保本机和远程主机均已正确安装了go-delve")]),s._v(" "),t("p",[s._v("在远程主机上:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ dlv debug --headless --listen "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":12345"')]),s._v(" --log --api-version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" cmd/alluxio/main.go\n")])])]),t("p",[s._v("这将使得远程主机的调试程序监听指定的端口(e.g. 12345)")]),s._v(" "),t("p",[s._v("在本机上:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ dlv connect "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<remote-addr>:12345"')]),s._v(" --api-version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("注意：要进行远程调试，请确保远程主机指定的端口未被占用并且已经对远程主机的防火墙进行了适当的配置")])])])}),[],!1,null,null,null);a.default=r.exports}}]);