
export class Order{
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    RequiredDate: Date;
    ShippedDate: Date;
    ShipVia: number;
    Freight: number;
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string | null;
    ShipPostalCode: string;
    ShipCountry: string;
    constructor
        (
            OrderID: number,
            CustomerID: string,
            EmployeeID: number,
            OrderDate: Date,
            RequiredDate: Date,
            ShippedDate: Date,
            ShipVia: number,
            Freight: number,
            ShipName: string,
            ShipAddress: string,
            ShipCity: string,
            ShipRegion: string | null,
            ShipPostalCode: string,
            ShipCountry: string) {
        this.OrderID = OrderID
        this.CustomerID = CustomerID;
        this.EmployeeID = EmployeeID;
        this.OrderDate = OrderDate;
        this.RequiredDate = RequiredDate;
        this.ShippedDate = ShippedDate;
        this.ShipVia = ShipVia;
        this.Freight = Freight;
        this.ShipName = ShipName;
        this.ShipAddress = ShipAddress;
        this.ShipCity = ShipCity;
        this.ShipRegion = ShipRegion;
        this.ShipPostalCode = ShipPostalCode;
        this.ShipCountry = ShipCountry;
    }
}


export const orders : Order[] =
[
    new Order(10248, "COMMI", 5, new Date("2024-07-04"), new Date("2024-08-01"), new Date("2024-07-16"), 3, 32.38, "Vins et alcools Chevalier", "59 rue de l'Abbaye", "Reims", null, "51100", "France"),
    new Order(10249, "CACTU", 6, new Date("2024-07-05"), new Date("2024-08-16"), new Date("2024-07-10"), 1, 11.61, "Toms Spezialitäten", "Luisenstr. 48", "Münster", null, "44087", "Germany"),
    new Order(10250, "CHOPS", 4, new Date("2024-07-08"), new Date("2024-08-05"), new Date("2024-07-12"), 2, 65.83, "Hanari Carnes", "Rua do Paço, 67", "Rio de Janeiro", "RJ", "05454-876", "Brazil"),
    new Order(10251, "BLAUS", 3, new Date("2024-07-08"), new Date("2024-08-05"), new Date("2024-07-15"), 1, 41.34, "Victuailles en stock", "2, rue du Commerce", "Lyon", null, "69004", "France"),
    new Order(10252, "BSBEV", 4, new Date("2024-07-09"), new Date("2024-08-06"), new Date("2024-07-11"), 2, 51.30, "Suprêmes délices", "Boulevard Tirou, 255", "Charleroi", null, "B-6000", "Belgium"),
    new Order(10253, "CACTU", 3, new Date("2024-07-10"), new Date("2024-07-24"), new Date("2024-07-16"), 2, 58.17, "Hanari Carnes", "Rua do Paço, 67", "Rio de Janeiro", "RJ", "05454-876", "Brazil"),
    new Order(10254, "CHOPS", 5, new Date("2024-07-11"), new Date("2024-08-08"), new Date("2024-07-23"), 2, 22.98, "Chop-suey Chinese", "Hauptstr. 31", "Bern", null, "3012", "Switzerland"),
    new Order(10255, "BONAP", 9, new Date("2024-07-12"), new Date("2024-08-09"), new Date("2024-07-15"), 3, 148.33, "Richter Supermarkt", "Starenweg 5", "Genève", null, "1204", "Switzerland"),
    new Order(10256, "BERGS", 3, new Date("2024-07-15"), new Date("2024-08-12"), new Date("2024-07-17"), 2, 13.97, "Wellington Importadora", "Rua do Mercado, 12", "Resende", "SP", "08737-363", "Brazil"),
    new Order(10257, "COMMI", 4, new Date("2024-07-16"), new Date("2024-08-13"), new Date("2024-07-22"), 3, 81.91, "HILARION-Abastos", "Carrera 22 con Ave. Carlos Soublette #8-35", "San Cristóbal", "Táchira", "5022", "Venezuela"),
    new Order(10258, "ERNSH", 1, new Date("2024-07-17"), new Date("2024-08-14"), new Date("2024-07-23"), 1, 140.51, "Ernst Handel", "Kirchgasse 6", "Graz", null, "8010", "Austria"),
    new Order(10259, "CENTC", 4, new Date("2024-07-18"), new Date("2024-08-15"), new Date("2024-07-25"), 3, 3.25, "Centro comercial Moctezuma", "Sierras de Granada 9993", "México D.F.", null, "05022", "Mexico"),
    new Order(10260, "DRACD", 4, new Date("2024-07-19"), new Date("2024-08-16"), new Date("2024-07-29"), 1, 55.09, "Ottilies Käseladen", "Mehrheimerstr. 369", "Köln", null, "50739", "Germany"),
    new Order(10261, "CONSH", 4, new Date("2024-07-19"), new Date("2024-08-16"), new Date("2024-07-30"), 2, 3.05, "Que Delícia", "Rua da Panificadora, 12", "Rio de Janeiro", "RJ", "02389-673", "Brazil"),
    new Order(10262, "ALFKI", 8, new Date("2024-07-22"), new Date("2024-08-19"), new Date("2024-07-25"), 3, 48.29, "Rattlesnake Canyon Grocery", "2817 Milton Dr.", "Albuquerque", "NM", "87110", "USA"),
    new Order(10263, "ERNSH", 9, new Date("2024-07-23"), new Date("2024-08-20"), new Date("2024-07-31"), 3, 146.06, "Ernst Handel", "Kirchgasse 6", "Graz", null, "8010", "Austria"),
    new Order(10264, "BSBEV", 6, new Date("2024-07-24"), new Date("2024-08-21"), new Date("2024-08-23"), 3, 3.67, "Folk och fä HB", "Åkergatan 24", "Bräcke", null, "S-844 67", "Sweden"),
    new Order(10265, "BLONP", 2, new Date("2024-07-25"), new Date("2024-08-22"), new Date("2024-08-12"), 1, 55.28, "Blondel père et fils", "24, place Kléber", "Strasbourg", null, "67000", "France"),
    new Order(10266, "CENTC", 3, new Date("2024-07-26"), new Date("2024-09-06"), new Date("2024-07-31"), 3, 25.73, "Wartian Herkku", "Torikatu 38", "Oulu", null, "90110", "Finland"),
    new Order(10267, "DRACD", 4, new Date("2024-07-29"), new Date("2024-08-26"), new Date("2024-08-06"), 1, 208.58, "Frankenversand", "Berliner Platz 43", "München", null, "80805", "Germany")
  ];