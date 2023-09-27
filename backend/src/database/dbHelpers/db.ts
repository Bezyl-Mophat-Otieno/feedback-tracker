import { sqlConfig } from "../../config/config";
import mssql, { Request } from "mssql";

type dataInput = {
  [key: string]: any;
};

class DB {
  static executeProcedure = async (
    procedureName: string,
    data: dataInput = {}
  ) => {
    const request: Request = (await mssql.connect(sqlConfig)).request();

    for (const key in data) {
      request.input(key, data[key]);
    }

    const result = request.execute(procedureName);

    return result;
  };
}

export default DB;
