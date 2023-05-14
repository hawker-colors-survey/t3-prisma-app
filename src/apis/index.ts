import type { FieldsStructure, AirtableResponse } from "./types";
export * from "./types";

const MAIN_TABLE = "MainReceive";
// const PILOT_TABLE = 'PilotReceive';
const TEST_TABLE = "TestReceive";

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID ?? "";
const token = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN ?? "";
const table = process.env.NODE_ENV === "production" ? MAIN_TABLE : TEST_TABLE;

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const postRecords = async (fields: any) => {
  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${table}`,
    { method: "POST", headers, body: JSON.stringify({ fields }) }
  );
  const data = await response.json();
  return data;
};

export const getAllRecords = async (): Promise<FieldsStructure[]> => {
  let offset = "";
  let data: AirtableResponse[] = [];
  let hasMoreRecords = true;

  while (hasMoreRecords) {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${table}?pageSize=100${
        offset ? `&offset=${offset}` : ""
      }`,
      { method: "GET", headers }
    );
    const parsed: any = await response.json();

    if (parsed.offset) offset = parsed.offset;
    else hasMoreRecords = false;
    data = [...data, ...parsed.records];
  }
  return data.map((item) => item.fields);
};

export const getRecordsByUserId = async (userId = "") => {
  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${table}?filterByFormula=%7BuserId%7D+%3D+'${userId}'`,
    { method: "GET", headers }
  );
  const data = await response.json();
  return data;
};

export const updateRecords = async (fields: any, recordId: string) => {
  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${table}/${recordId}`,
    { method: "PATCH", headers, body: JSON.stringify({ fields }) }
  );
  const data = await response.json();
  return data;
};
