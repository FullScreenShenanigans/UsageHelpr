define(["UsageHelpr"], function (UsageHelprModule) {
    var UsageHelpr = UsageHelprModule.UsageHelpr;

    var mocks = {
        /**
         * 
         */
        mockUsageHelpr: function (settings) {
            return new UsageHelpr(settings)
        }
    };

    return mocks;
});
