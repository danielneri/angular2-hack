var CatalogService = (function () {
    function CatalogService() {
    }
    CatalogService.prototype.getSongs = function () {
        return Songs;
    };
    ;
    return CatalogService;
})();
exports.CatalogService = CatalogService;
var Songs = [
    {
        title: "",
        duration: 5,
        musicalKey: "G"
    },
    {
        title: "",
        duration: 5,
        musicalKey: "G"
    }
];
//# sourceMappingURL=Catalog.service.js.map