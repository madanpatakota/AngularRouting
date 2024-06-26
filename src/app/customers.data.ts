
export class Customer{
    CustomerID: string;
    CompanyName: string;
    ContactName: string; //Customer Name
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string | null;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string | null;


    constructor(
        CustomerID: string,
        CompanyName: string,
        ContactName: string,
        ContactTitle: string,
        Address: string,
        City: string,
        Region: string | null,
        PostalCode: string,
        Country: string,
        Phone: string,
        Fax: string | null
      ) {
        this.CustomerID = CustomerID;
        this.CompanyName = CompanyName;
        this.ContactName = ContactName;
        this.ContactTitle = ContactTitle;
        this.Address = Address;
        this.City = City;
        this.Region = Region;
        this.PostalCode = PostalCode;
        this.Country = Country;
        this.Phone = Phone;
        this.Fax = Fax;
      }


}


export const customers : Customer[] = 
[
    new Customer("ALFKI", "Alfreds Futterkiste", "Maria Anders", "Sales Representative", "Obere Str. 57", "Berlin", null, "12209", "Germany", "030-0074321", "030-0076545"),
    new Customer("ANATR", "Ana Trujillo Emparedados y helados", "Ana Trujillo", "Owner", "Avda. de la Constitución 2222", "México D.F.", null, "05021", "Mexico", "(5) 555-4729", "(5) 555-3745"),
    new Customer("ANTON", "Antonio Moreno Taquería", "Antonio Moreno", "Owner", "Mataderos 2312", "México D.F.", null, "05023", "Mexico", "(5) 555-3932", null),
    new Customer("AROUT", "Around the Horn", "Thomas Hardy", "Sales Representative", "120 Hanover Sq.", "London", null, "WA1 1DP", "UK", "(171) 555-7788", "(171) 555-6750"),
    new Customer("BERGS", "Berglunds snabbköp", "Christina Berglund", "Order Administrator", "Berguvsvägen 8", "Luleå", null, "S-958 22", "Sweden", "0921-12 34 65", "0921-12 34 67"),
    new Customer("BLAUS", "Blauer See Delikatessen", "Hanna Moos", "Sales Representative", "Forsterstr. 57", "Mannheim", null, "68306", "Germany", "0621-08460", "0621-08924"),
    new Customer("BLONP", "Blondesddsl père et fils", "Frédérique Citeaux", "Marketing Manager", "24, place Kléber", "Strasbourg", null, "67000", "France", "88.60.15.31", "88.60.15.32"),
    new Customer("BOLID", "Bólido Comidas preparadas", "Martín Sommer", "Owner", "C/ Araquil, 67", "Madrid", null, "28023", "Spain", "(91) 555 22 82", "(91) 555 91 99"),
    new Customer("BONAP", "Bon app'", "Laurence Lebihan", "Owner", "12, rue des Bouchers", "Marseille", null, "13008", "France", "91.24.45.40", "91.24.45.41"),
    new Customer("BOTTM", "Bottom-Dollar Markets", "Elizabeth Lincoln", "Accounting Manager", "23 Tsawassen Blvd.", "Tsawassen", "BC", "T2F 8M4", "Canada", "(604) 555-4729", "(604) 555-3745"),
    new Customer("BSBEV", "B's Beverages", "Victoria Ashworth", "Sales Representative", "Fauntleroy Circus", "London", null, "EC2 5NT", "UK", "(171) 555-1212", null),
    new Customer("CACTU", "Cactus Comidas para llevar", "Patricio Simpson", "Sales Agent", "Cerrito 333", "Buenos Aires", null, "1010", "Argentina", "(1) 135-5555", "(1) 135-4892"),
    new Customer("CENTC", "Centro comercial Moctezuma", "Francisco Chang", "Marketing Manager", "Sierras de Granada 9993", "México D.F.", null, "05022", "Mexico", "(5) 555-3392", "(5) 555-7293"),
    new Customer("CHOPS", "Chop-suey Chinese", "Yang Wang", "Owner", "Hauptstr. 29", "Bern", null, "3012", "Switzerland", "0452-076545", null),
    new Customer("COMMI", "Comércio Mineiro", "Pedro Afonso", "Sales Associate", "Av. dos Lusíadas, 23", "Sao Paulo", "SP", "05432-043", "Brazil", "(11) 555-7647", null),
    new Customer("CONSH", "Consolidated Holdings", "Elizabeth Brown", "Sales Representative", "Berkeley Gardens 12 Brewery", "London", null, "WX1 6LT", "UK", "(171) 555-2282", "(171) 555-9199"),
    new Customer("DRACD", "Drachenblut Delikatessen", "Sven Ottlieb", "Order Administrator", "Walserweg 21", "Aachen", null, "52066", "Germany", "0241-039123", "0241-059428"),
    new Customer("DUMON", "Du monde entier", "Janine Labrune", "Owner", "67, rue des Cinquante Otages", "Nantes", null, "44000", "France", "40.67.88.88", "40.67.89.89"),
    new Customer("EASTC", "Eastern Connection", "Ann Devon", "Sales Agent", "35 King George", "London", null, "WX3 6FW", "UK", "(171) 555-0297", "(171) 555-3373"),
    new Customer("ERNSH", "Ernst Handel", "Roland Mendel", "Sales Manager", "Kirchgasse 6", "Graz", null, "8010", "Austria", "7675-3425", "7675-3426")
]