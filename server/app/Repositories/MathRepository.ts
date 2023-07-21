import Database from '@ioc:Adonis/Lucid/Database'

class MathRepository {
    public async getMathTierScore(tyoe: string, math: string) {
        const query = `
 SELECT ( SELECT ${math}(match_players.${tyoe}) AS iron
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'IRON'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS iron,
    ( SELECT ${math}(match_players.${tyoe}) AS bronze
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'BRONZE'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS bronze,
    ( SELECT ${math}(match_players.${tyoe}) AS silver
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'SILVER'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS silver,
    ( SELECT ${math}(match_players.${tyoe}) AS gold
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'GOLD'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS gold,
    ( SELECT ${math}(match_players.${tyoe}) AS platinum
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'PLATINUM'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS platinum,
    ( SELECT ${math}(match_players.${tyoe}) AS diamond
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'DIAMOND'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS diamond,
    ( SELECT ${math}(match_players.${tyoe}) AS master
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'MASTER'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS master,
    ( SELECT ${math}(match_players.${tyoe}) AS grandmaster
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'GRANDMASTER'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS grandmaster,
    ( SELECT ${math}(match_players.${tyoe}) AS challenger
           FROM match_players
          WHERE (match_players.summoner_puuid::text IN ( SELECT match_player_ranks.summoner_puuid
                   FROM match_player_ranks
                  WHERE match_player_ranks.gamemode = '420'::smallint AND match_player_ranks.tier::text = 'CHALLENGER'::text
                  GROUP BY match_player_ranks.summoner_puuid))) AS challenger;
        `


        const { rows } = await Database.rawQuery(query)
        if (rows[0]['iron'])
            return rows[0]
        else
            return {
                'iron' : 1, 'bronze' : 1, 'silver' : 1, 'gold' : 1, 'platinum' : 1, 'diamond' : 1, 'master' : 1, 'grandmaster' : 1, 'challenger' : 1
            }
    }

    public async getTierScore(tyoe: string, math: string) {
        const query = `
            SELECT ${tyoe}_${math} FROM rank_scores
            ORDER BY id DESC
            LIMIT 1
        `

        const { rows } = await Database.rawQuery(query)

        return 1
        // return {
        //     'iron' : 1, 'bronze' : 1, 'silver' : 1, 'gold' : 1, 'platinum' : 1, 'diamond' : 1, 'master' : 1, 'grandmaster' : 1, 'challenger' : 1
        // };
    }
}

export default new MathRepository()
