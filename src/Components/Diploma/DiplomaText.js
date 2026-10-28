import React from "react";

const DiplomaText = ({ isPhone }) => {
  return (
    <div
      className="diploma-text"
      style={{
        fontSize: isPhone ? "0.9375rem" : "1rem",
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[#ff6374]">
        Published at SMAP 2025
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">
        The Debates of the Greek Parliament as Open Linked Data
      </h3>
      <p className="mt-4">
        My NTUA diploma thesis developed a data-processing pipeline that
        transforms Greek parliamentary proceedings into structured,
        machine-readable datasets.
      </p>
      <p className="mt-4">
        The system converts raw Word and text documents into LegalDocML and TEI
        XML, generates RDF data, and enables exploration through Apache Jena
        Fuseki and SPARQL.
      </p>
      <p className="mt-4 text-sm text-slate-400">
        <strong className="text-slate-200">Technologies:</strong> Python,
        ANTLR4, XML, LegalDocML, TEI, RDF, SPARQL, Apache Jena Fuseki
      </p>
    </div>
  );
};

export default DiplomaText;
