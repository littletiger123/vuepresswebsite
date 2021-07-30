(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{537:function(s,e,t){"use strict";t.r(e);var a=t(51),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在kubernetes集群上部署fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在kubernetes集群上部署fluid"}},[s._v("#")]),s._v(" 在Kubernetes集群上部署Fluid")]),s._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),t("ul",[t("li",[s._v("Git")]),s._v(" "),t("li",[s._v("Kubernetes集群（version >= 1.14）, 并且支持CSI功能")]),s._v(" "),t("li",[s._v("kubectl（version >= 1.14）")]),s._v(" "),t("li",[s._v("Helm（version >= 3.0）")])]),s._v(" "),t("p",[s._v("接下来的文档假设您已经配置好上述所有环境。")]),s._v(" "),t("p",[s._v("对于"),t("code",[s._v("kubectl")]),s._v("的安装和配置，请参考"),t("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("对于Helm 3的安装和配置，请参考"),t("a",{attrs:{href:"https://v3.helm.sh/docs/intro/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"fluid安装步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid安装步骤"}},[s._v("#")]),s._v(" Fluid安装步骤")]),s._v(" "),t("h3",{attrs:{id:"获取fluid-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取fluid-chart"}},[s._v("#")]),s._v(" 获取Fluid Chart")]),s._v(" "),t("p",[s._v("您可以从"),t("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Fluid Releases"),t("OutboundLink")],1),s._v("下载最新的Fluid安装包。")]),s._v(" "),t("h3",{attrs:{id:"使用helm安装fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用helm安装fluid"}},[s._v("#")]),s._v(" 使用Helm安装Fluid")]),s._v(" "),t("p",[s._v("创建命名空间：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl create ns fluid-system\n")])])]),t("p",[s._v("安装Fluid：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ helm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fluid fluid.tgz\nNAME: fluid\nLAST DEPLOYED: Fri Jul "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":10:18 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\nNAMESPACE: default\nSTATUS: deployed\nREVISION: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nTEST SUITE: None\n")])])]),t("blockquote",[t("p",[t("code",[s._v("helm install")]),s._v("命令的一般格式是"),t("code",[s._v("helm install <RELEASE_NAME> <SOURCE>")]),s._v("，在上面的命令中，第一个"),t("code",[s._v("fluid")]),s._v("指定了安装的release名字，这可以自行更改，第二个"),t("code",[s._v("fluid.tgz")]),s._v("指定了helm chart所在路径。")])]),s._v(" "),t("h3",{attrs:{id:"使用helm将fluid更新到最新版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用helm将fluid更新到最新版本"}},[s._v("#")]),s._v(" 使用Helm将Fluid更新到最新版本")]),s._v(" "),t("p",[s._v("如果您此前已经安装过旧版本的Fluid，可以使用Helm进行更新。\n更新前，建议确保AlluxioRuntime资源对象中的各个组件已经顺利启动完成，也就是类似以下状态：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-fuse-chscz     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9h\nhbase-fuse-fmhr5     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9h\nhbase-master-0       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9h\nhbase-worker-bdbjg   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9h\nhbase-worker-rznd5   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          9h\n")])])]),t("p",[s._v("由于helm upgrade不会更新CRD，需要先对其手动进行更新：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf fluid-0.5.0.tgz ./\n$ kubectl apply -f fluid/crds/.\n")])])]),t("p",[s._v("更新：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ helm upgrade fluid fluid/\nRelease "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fluid"')]),s._v(" has been upgraded. Happy Helming"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nNAME: fluid\nLAST DEPLOYED: Fri Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" 09:22:32 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("\nNAMESPACE: default\nSTATUS: deployed\nREVISION: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nTEST SUITE: None\n")])])]),t("p",[s._v("此时，旧版本的controller不会自动结束，新版本的controller会停留在Pending状态：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl -n fluid-system get pods\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-56687869f6-g9l9n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     Pending   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          96s\nalluxioruntime-controller-5b64fdbbb-j9h6r    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m55s\ncsi-nodeplugin-fluid-r6crn                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          94s\ncsi-nodeplugin-fluid-wvhdn                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          87s\ndataset-controller-5b7848dbbb-rjkl9          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          3m55s\ndataset-controller-64bf45c497-w8ncb          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/1     Pending   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          96s\n")])])]),t("p",[s._v("手动进行删除：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl -n fluid-system delete pod alluxioruntime-controller-5b64fdbbb-j9h6r \n$ kubectl -n fluid-system delete pod dataset-controller-5b7848dbbb-rjkl9\n")])])]),t("blockquote",[t("p",[s._v("建议您从v0.3和v0.4升级。如果您安装的是更旧版本的Fluid，建议重新进行安装。")])]),s._v(" "),t("h3",{attrs:{id:"检查各组件状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查各组件状态"}},[s._v("#")]),s._v(" 检查各组件状态")]),s._v(" "),t("p",[t("strong",[s._v("查看Fluid使用的CRD:")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get crd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" data.fluid.io\nalluxiodataloads.data.fluid.io          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:00:47Z\nalluxioruntimes.data.fluid.io           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:00:47Z\ndatabackups.data.fluid.io               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:03:45Z\ndataloads.data.fluid.io                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:00:47Z\ndatasets.data.fluid.io                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:00:47Z\njindoruntimes.data.fluid.io             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-03-12T00:03:45Z\n")])])]),t("p",[t("strong",[s._v("查看各Pod的状态:")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ kubectl get pod -n fluid-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5dfb5c7966-mkgzb   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2d1h\ncsi-nodeplugin-fluid-64h69                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2d1h\ncsi-nodeplugin-fluid-tc7fx                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2d1h\ndataset-controller-7c4bc68b96-26mcb          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          2d1h\n")])])]),t("p",[s._v("如果Pod状态如上所示，那么Fluid就可以正常使用了！")]),s._v(" "),t("p",[t("strong",[s._v("查看各Pod内程序的版本:")])]),s._v(" "),t("p",[s._v("csi-nodeplugin、alluxioruntime-controller、dataset-controller在启动时，会将自身的版本信息打印到日志中。"),t("br"),s._v("\n如果您使用我们提供的charts进行安装，它们的版本应该是完全一致的。"),t("br"),s._v("\n如果您是手动安装部署，它们的版本可能不完全一致，可以分别依次查看：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ kubectl logs csi-nodeplugin-fluid-tc7fx -c plugins  -n fluid-system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n$ kubectl logs alluxioruntime-controller-5dfb5c7966-mkgzb -n fluid-system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n$ kubectl logs dataset-controller-7c4bc68b96-26mcb  -n fluid-system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])])]),t("p",[s._v("打印出的日志如下格式：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 BuildDate: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-10-26_14:04:22\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 GitCommit: f2c3a3fa1335cb0384e565f17a4f3284a6507cef\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 GitTreeState: dirty\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 GoVersion: go1.14.2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 Compiler: gc\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/10/27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":16:02 Platform: linux/amd64\n")])])]),t("p",[s._v("若Pod打印的日志已经被清理掉，可以执行下列命令查看版本：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" csi-nodeplugin-fluid-tc7fx -c plugins  fluid-csi version -n fluid-system\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" alluxioruntime-controller-5dfb5c7966-mkgzb alluxioruntime-controller version -n fluid-system\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" dataset-controller-7c4bc68b96-26mcb dataset-controller version -n  fluid-system \n")])])]),t("h3",{attrs:{id:"fluid使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid使用示例"}},[s._v("#")]),s._v(" Fluid使用示例")]),s._v(" "),t("p",[s._v("有关Fluid的使用示例,可以参考我们提供的示例文档:")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/zh/samples/"}},[s._v("远程文件访问加速")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/samples/data_co_locality.html"}},[s._v("数据缓存亲和性调度")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh/samples/machinelearning.html"}},[s._v("用Fluid加速机器学习训练")])],1)]),s._v(" "),t("h3",{attrs:{id:"卸载fluid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载fluid"}},[s._v("#")]),s._v(" 卸载Fluid")]),s._v(" "),t("p",[s._v("为了安全的卸载fluid，在卸载前，首先需要检查fluid相关的自定义资源对象是否已被清除：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl get crds -o custom-columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NAME:.metadata.name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" data.fluid.io  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':t;N;s/\\n/,/;b t'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" kubectl get --all-namespaces\n")])])]),t("p",[s._v("如果确认已经删除所有资源对象，则可以安全卸载fluid：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ helm delete fluid\n$ kubectl delete -f fluid/crds\n$ kubectl delete ns fluid-system\n")])])]),t("blockquote",[t("p",[t("code",[s._v("helm delete")]),s._v("命令中的"),t("code",[s._v("fluid")]),s._v("对应安装时指定的<RELEASE_NAME>。")])]),s._v(" "),t("h3",{attrs:{id:"高级配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级配置"}},[s._v("#")]),s._v(" 高级配置")]),s._v(" "),t("p",[s._v("在一些特定的云厂商实现下， 默认mount根目录"),t("code",[s._v("/runtime-mnt")]),s._v("是不可写的,因此需要修改目录位置")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("helm install fluid --set runtime.mountRoot=/var/lib/docker/runtime-mnt fluid\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);