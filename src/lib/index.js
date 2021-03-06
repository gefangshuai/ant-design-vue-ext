import BaseContainer from "./container/BaseContainer";
import SplitContainer from "./container/SplitContainer";
import TabContainer from "./container/TabContainer";
import TableContainer from "./container/TableContainer";
import TreeContainer from "./container/TreeContainer";
import MenuContainer from "./container/MenuContainer";

import STable from "./partial/table/STable";
import STableColumn from "./partial/table/STableColumn";
import SModal from "./partial/s-modal";

import './less/index.less'

export default {
    install(Vue) {
        Vue.use(SModal)

        Vue.component('BaseContainer', BaseContainer)
        Vue.component('SplitContainer', SplitContainer)
        Vue.component('TabContainer', TabContainer)
        Vue.component('TableContainer', TableContainer)
        Vue.component('TreeContainer', TreeContainer)
        Vue.component('MenuContainer', MenuContainer)

        Vue.component('STable', STable)
        Vue.component('STableColumn', STableColumn)
    }
}