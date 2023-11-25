package com.cybersport.cybersportcrudservice.excel;

import com.cybersport.cybersportcrudservice.entity.dto.ResultTableDto;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public class TableResExcelGenerator {
    private List<ResultTableDto> resultTableDto;
    private XSSFWorkbook workbook;
    private XSSFSheet sheet;

    public TableResExcelGenerator(List < ResultTableDto > resultTableDto) {
        this.resultTableDto = resultTableDto;
        workbook = new XSSFWorkbook();
    }
    private void writeHeader() {
        sheet = workbook.createSheet("Результаты турнира");
        Row row = sheet.createRow(0);
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setBold(true);
        font.setFontHeight(16);
        style.setFont(font);
        createCell(row, 0, "ID команды", style);
        createCell(row, 1, "Количество побед", style);
        createCell(row, 2, "Название команды", style);
        createCell(row, 3, "Субъект РФ", style);
        createCell(row, 4, "ID игрока", style);
        createCell(row, 5, "Никнейм", style);
        createCell(row, 6, "Имя", style);
        createCell(row, 7, "Фамилия", style);
        createCell(row, 8, "Отчество", style);
        createCell(row, 9, "Роль в команде", style);
        createCell(row, 10, "Пол", style);
        createCell(row, 11, "День рождения", style);
    }
    private void createCell(Row row, int columnCount, Object valueOfCell, CellStyle style) {
        sheet.autoSizeColumn(columnCount);
        Cell cell = row.createCell(columnCount);
        if (valueOfCell instanceof Integer) {
            cell.setCellValue((Integer) valueOfCell);
        } else if (valueOfCell instanceof Long) {
            cell.setCellValue((Long) valueOfCell);
        } else if (valueOfCell instanceof String) {
            cell.setCellValue((String) valueOfCell);
        } else if (valueOfCell instanceof UUID) {
            cell.setCellValue(valueOfCell.toString());
        }else if (valueOfCell instanceof LocalDate) {
            cell.setCellValue(valueOfCell.toString());
        } else if (valueOfCell == null){
            cell.setCellValue(0);
        }else {
            cell.setCellValue((Boolean) valueOfCell);
        }
        cell.setCellStyle(style);
    }
    private void write() {
        int rowCount = 1;
        CellStyle style = workbook.createCellStyle();
        XSSFFont font = workbook.createFont();
        font.setFontHeight(14);
        style.setFont(font);
        for (ResultTableDto record: this.resultTableDto) {
            Row row = sheet.createRow(rowCount++);
            int columnCount = 0;
            createCell(row, columnCount++, record.getTeamId(), style);
            createCell(row, columnCount++, record.getWinCount(), style);
            createCell(row, columnCount++, record.getTeamName(), style);
            createCell(row, columnCount++, record.getTeamRegion(), style);
            createCell(row, columnCount++, record.getUserId(), style);
            createCell(row, columnCount++, record.getUserNickname(), style);
            createCell(row, columnCount++, record.getUserName(), style);
            createCell(row, columnCount++, record.getUserSecName(), style);
            createCell(row, columnCount++, record.getUserThirdName(), style);
            createCell(row, columnCount++, record.getUserRole(), style);
            createCell(row, columnCount++, record.getUserSex(), style);
            createCell(row, columnCount++, record.getUserBday(), style);
        }
    }
    public void generateExcelFile(HttpServletResponse response) throws IOException {
        writeHeader();
        write();
        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
        outputStream.close();
    }
}
