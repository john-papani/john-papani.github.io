import React from "react";

const DiplomaText = () => {
  return (
    <div className="text-sm text-[var(--color-muted)] leading-relaxed">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#ff6374]">
        Published at SMAP 2025
      </p>
      <h3 className="mt-2 text-xl font-semibold text-[var(--color-light)]">
        The Debates of the Greek Parliament as Open Linked Data
      </h3>
      <p className="mt-3">
        My NTUA diploma thesis developed a data-processing pipeline that
        transforms Greek parliamentary proceedings into structured LegalDocML,
        TEI XML, and RDF datasets for exploration with SPARQL.
      </p>
      <p className="mt-3 text-xs text-[var(--color-muted)]">
        <strong className="text-[var(--color-light)]">Technologies:</strong> Python,
        ANTLR4, XML, LegalDocML, TEI, RDF, SPARQL, Apache Jena Fuseki
      </p>
    </div>
  );
};

export default DiplomaText;
