import { render as base } from '../crud.js';

const CONFIG = {
  "titulo": "Categorias",
  "tabela": "arm_categorias",
  "modulo": "categoria",
  "singular": "categoria",
  "ordem": "descricao",
  "filtro": "Código ou descrição",
  "colunas": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar",
      "classe": "mono"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição"
    }
  ],
  "campos": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição",
      "obrigatorio": true
    }
  ]
};

export function render(raiz, ctx) {
  return base(raiz, ctx, CONFIG);
}
