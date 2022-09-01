import Database from '@ioc:Adonis/Lucid/Database'

class SummonerRepository {
    public async getAvg(puuid: string, type: string) {
        const query = `
        SELECT
            AVG(${type})
        FROM
            match_players AS p
        LEFT OUTER JOIN matches AS m ON m.id = p.match_id
        WHERE
            p.summoner_puuid = '${puuid}' AND
            m.gamemode IN ('420', '440')
        `
    
        const { rows } = await Database.rawQuery(query)
        return rows[0]['avg']
    }
}

export default new SummonerRepository()
