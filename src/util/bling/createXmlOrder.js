import Parser from 'xml2js';
export default async function createXmlOrder({ cod,owern_name, title, value }) {

    const builder = new Parser.Builder();


    const order = { codigo: cod, descricao: title, un: 'Pç', qtde: 1, vlr_unit: value }

    const objectOrder = {
        cliente: {
            nome: owern_name
        },
        itens: {
            item: [order]
        },
        obs: 'Testando o campo observações do pedido',
        obs_internas: 'Testando o campo observações internas do pedido',
    }

    const xmldata = builder.buildObject(objectOrder)

    return encodeURI(xmldata)

}