import { sql, poolPromise } from "@/lib/db";

export async function GET(req) {
	try {
		const { searchParams } = new URL(req.url);
		const Operation = searchParams.get("Operation");
		const PakejID = searchParams.get("PakejID");
		const PakejName = searchParams.get("PakejName");
		const HotelMakkahID = searchParams.get("HotelMakkahID");
		const HotelMadinahID = searchParams.get("HotelMadinahID");
		const TripIDs = searchParams.get("TripIDs");
		const TripUnique = searchParams.get("TripUnique");

		// New parameters
		const Adult_Double = searchParams.get("Adult_Double");
		const Adult_Triple = searchParams.get("Adult_Triple");
		const Adult_Quad = searchParams.get("Adult_Quad");

		const ChildWBed_Double = searchParams.get("ChildWBed_Double");
		const ChildWBed_Triple = searchParams.get("ChildWBed_Triple");
		const ChildWBed_Quad = searchParams.get("ChildWBed_Quad");

		const ChildNoBed_Double = searchParams.get("ChildNoBed_Double");
		const ChildNoBed_Triple = searchParams.get("ChildNoBed_Triple");
		const ChildNoBed_Quad = searchParams.get("ChildNoBed_Quad");

		const Infant_Double = searchParams.get("Infant_Double");
		const Infant_Triple = searchParams.get("Infant_Triple");
		const Infant_Quad = searchParams.get("Infant_Quad");

		const pool = await poolPromise;
		const result = await pool
			.request()
			.input("Operation", sql.VarChar(10), Operation)
			.input("PakejID", sql.Int, PakejID)
			.input("PakejName", sql.VarChar(255), PakejName)
			.input("HotelMakkahID", sql.Int, HotelMakkahID)
			.input("HotelMadinahID", sql.Int, HotelMadinahID)
			.input("TripIDs", sql.VarChar(255), TripIDs)
			.input("TripUnique", sql.VarChar(1), TripUnique)
			.input("Adult_Double", sql.Decimal(10, 2), Adult_Double)
			.input("Adult_Triple", sql.Decimal(10, 2), Adult_Triple)
			.input("Adult_Quad", sql.Decimal(10, 2), Adult_Quad)
			.input("ChildWBed_Double", sql.Decimal(10, 2), ChildWBed_Double)
			.input("ChildWBed_Triple", sql.Decimal(10, 2), ChildWBed_Triple)
			.input("ChildWBed_Quad", sql.Decimal(10, 2), ChildWBed_Quad)
			.input("ChildNoBed_Double", sql.Decimal(10, 2), ChildNoBed_Double)
			.input("ChildNoBed_Triple", sql.Decimal(10, 2), ChildNoBed_Triple)
			.input("ChildNoBed_Quad", sql.Decimal(10, 2), ChildNoBed_Quad)
			.input("Infant_Double", sql.Decimal(10, 2), Infant_Double)
			.input("Infant_Triple", sql.Decimal(10, 2), Infant_Triple)
			.input("Infant_Quad", sql.Decimal(10, 2), Infant_Quad)
			.execute("SP_Manage_Package");

		return Response.json(result.recordset);
	} catch (err) {
		console.error("ERROR:", err);
		return Response.json({ error: { message: err.message } }, { status: 500 });
	}
}
