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
        id: 0,
        title: "Stairway to Heaven",
        duration: 6,
        musicalKey: "Am"
    },
    {
        id: 1,
        title: "Something From Nothing",
        duration: 5,
        musicalKey: "Em"
    }
];
//# sourceMappingURL=Catalog.service.js.map