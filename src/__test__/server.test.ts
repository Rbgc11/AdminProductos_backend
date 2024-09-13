import {connectDB} from "../server";
import db from "../config/db";

//Pruebas para forzar errores
jest.mock('../config/db')

describe('connectDB', () => {
    it('should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('Hubo un ERROR al conectar a la BD '))
        const consoleSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un ERROR al conectar a la BD ')
        )
    })
})
