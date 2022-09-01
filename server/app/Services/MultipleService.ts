import Multiple from 'App/Models/Multiple'
// import SummonerRepository from 'App/Repositories/SummonerRepository'

class MultipleService {
  public async getMultiple(id: number) {
    const result = await Multiple.query()
      .where('id', id)
      .orderBy('id', 'desc')
      .select('names', 'datas', 'created_at')
      .firstOrFail()

    return result.$original
  }

  public async setMultiple(smultiplNames: string[], multipleDatas: object) {
    const multiple = await Multiple.create({
      names: {...smultiplNames},
      datas: multipleDatas
    })
    
    return multiple.$original.id
  }  
}

export default new MultipleService()
