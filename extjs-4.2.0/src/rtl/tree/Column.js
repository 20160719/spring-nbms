Ext.define('Ext.rtl.tree.Column', {
    override: 'Ext.tree.Column',
    
    getChildCls: function() {
        return this._childCls || (this._childCls =
            (this.getHierarchyState().rtl ? Ext.baseCSSPrefix + 'rtl' : ''));
    }
});