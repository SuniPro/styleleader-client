/** @jsxImportSource @emotion/react */
import { TableContainer, ManagementTableContainer } from "../../layouts";
import React from "react";
import { ColumnResizeMode } from "@tanstack/react-table";
import { TableBody, TableHeader } from "../../Board/Table/TableParticle";
import { Modal } from "@mui/material";
import { ServiceCategory, ServiceContents } from "../../../model/Service";
import {
  CategoryManageModal,
  CollectionManageModal,
  DisplayManageModal,
} from "../display/modal";
import { DisplayAssets } from "../../../model/Display";
import { Collection } from "../../../model/Collection";

export function DisplayManageTable(props: {
  displayAsset: DisplayAssets;
  table: any;
  columnResizeMode: ColumnResizeMode;
  isOpen: boolean;
  close: () => void;
  funcType: boolean;
}) {
  const { displayAsset, close, funcType, isOpen, table, columnResizeMode } =
    props;
  return (
    <>
      <TableContainer>
        <TableHeader
          table={table}
          headerBorder={"1px solid #ffffff"}
          columnResizeMode={columnResizeMode}
        />

        <TableBody table={table} />
      </TableContainer>
      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={DisplayManageModal({ displayAsset, close, funcType })}
      />
    </>
  );
}

export function CollectionManageTable(props: {
  table: any;
  columnResizeMode: ColumnResizeMode;
  isOpen: boolean;
  close: () => void;
  funcType: boolean;
  collection: Collection;
}) {
  const { table, columnResizeMode, funcType, isOpen, close, collection } =
    props;

  return (
    <>
      <TableContainer>
        <TableHeader
          table={table}
          headerBorder={"1px solid #ffffff"}
          columnResizeMode={columnResizeMode}
        />
        <TableBody table={table} />
      </TableContainer>
      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={CollectionManageModal({
          collection: collection,
          close,
          funcType,
        })}
      />
    </>
  );
}

export function ServiceManageTable(props: {
  table: any;
  columnResizeMode: ColumnResizeMode;
  isOpen: boolean;
  close: () => void;
  funcType: boolean;
  category: ServiceCategory;
  service: ServiceContents;
}) {
  const {
    table,
    columnResizeMode,
    funcType,
    isOpen,
    close,
    service,
    category,
  } = props;

  return (
    <ManagementTableContainer>
      <TableContainer>
        <TableHeader
          table={table}
          headerBorder={"1px solid #ffffff"}
          columnResizeMode={columnResizeMode}
        />
        <TableBody table={table} />
      </TableContainer>
      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        children={CategoryManageModal({
          category,
          service,
          close,
          funcType,
        })}
      />
    </ManagementTableContainer>
  );
}
