Ext.define('myapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '首页',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '大象直播'
                },

                html: [
                    "白加黑直播室"
                ].join("")
            },
            {
                title: '查看',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '详细内容'
                    },
                    {
                        xtype: 'video',
                        url: 'https://www.evideocloud.com/b3v3.swf?playerid=806419&vid=2c14c0ee61e311e5aab3dad760e64ef2&uid=123454341&ua=flash',
                        posterUrl: 'http://img.dx168.com/hi/20157/7/147/47/285_4776b1a88c.png'
                    }
                ]
            }
        ]
    }
});
