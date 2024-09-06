/**
 ****************************************************************************************************
 * @file        main.c
 * @author      正点原子团队(ALIENTEK)
 * @version     V1.0
 * @date        2024-06-25
 * @brief       触摸屏 实验
 * @license     Copyright (c) 2020-2032, 广州市星翼电子科技有限公司
 ****************************************************************************************************
 * @attention
 *
 * 实验平台:正点原子 ESP32-S3 带外壳版本
 * 在线视频:www.yuanzige.com
 * 技术论坛:www.openedv.com
 * 公司网址:www.alientek.com
 * 购买地址:openedv.taobao.com
 *
 ****************************************************************************************************
 */

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_system.h"
#include "nvs_flash.h"
#include "led.h"
#include "lcd.h"
#include "touch.h"


i2c_obj_t i2c0_master;

/**
 * @brief       清空屏幕并在右上角显示"RST"
 * @param       无
 * @retval      无
 */
void load_draw_dialog(void)
{
    lcd_clear(WHITE);                                                  /* 清屏 */
    lcd_show_string(lcd_dev.width - 24, 0, 200, 16, 16, "RST", BLUE);  /* 显示清屏区域 */
}

/**
 * @brief       画粗线
 * @param       x1,y1:起点坐标
 * @param       x2,y2:终点坐标
 * @param       size :线条粗细程度
 * @param       color:线的颜色
 * @retval      无
 */
void lcd_draw_bline(uint16_t x1, uint16_t y1, uint16_t x2, uint16_t y2, uint8_t size, uint16_t color)
{
    uint16_t t;
    int xerr = 0, yerr = 0, delta_x, delta_y, distance;
    int incx, incy, row, col;
    
    if (x1 < size || x2 < size || y1 < size || y2 < size)
    {
        return;
    }
    
    delta_x = x2 - x1;                              /* 计算坐标增量 */
    delta_y = y2 - y1;
    row = x1;
    col = y1;
    
    if (delta_x > 0)
    {
        incx = 1;                                   /* 设置单步方向 */
    }
    else if (delta_x == 0)
    {
        incx = 0;                                   /* 垂直线 */
    }
    else
    {
        incx = -1;
        delta_x = -delta_x;
    }
    
    if (delta_y > 0)
    {
        incy = 1;
    }
    else if (delta_y == 0)
    {
        incy = 0;                                   /* 水平线 */
    }
    else
    {
        incy = -1;
        delta_y = -delta_y;
    }
    
    if ( delta_x > delta_y)
    {
        distance = delta_x;                         /* 选取基本增量坐标轴 */
    }
    else 
    {
        distance = delta_y;
    }
    
    for (t = 0; t <= distance + 1; t++ )            /* 画线输出 */
    {
        lcd_draw_circle(row, col, size, color);     /* 画点 */
        xerr += delta_x ;
        yerr += delta_y ;
        
        if (xerr > distance)
        {
            xerr -= distance;
            row += incx;
        }
        
        if (yerr > distance)
        {
            yerr -= distance;
            col += incy;
        }
    }
}

/* 6个触控点的颜色(电容触摸屏用) */
static const uint16_t POINT_COLOR_TBL[6] = {
    RED,
    GREEN,
    BLUE,
    YELLOW,
    MAGENTA,
    CYAN,
};

/**
 * @brief       电容触摸屏测试函数
 * @param       无
 * @retval      无
 */
void ctp_test(void)
{
    uint8_t t = 0;
    uint8_t i = 0;
    uint16_t lastpos[10][2];
    
    while (1)
    {
        tp_dev.scan(0);
        
        for (t = 0; t < 5; t++)
        {
            if ((tp_dev.sta) & (1 << t))
            {
                if (tp_dev.x[t] < lcd_dev.width && tp_dev.y[t] < 480)                                               /* 坐标在屏幕范围内 */
                {
                    if (lastpos[t][0] == 0XFFFF)
                    {
                        lastpos[t][0] = tp_dev.x[t];
                        lastpos[t][1] = tp_dev.y[t];
                    }
                    
                    lcd_draw_bline(lastpos[t][0], lastpos[t][1], tp_dev.x[t], tp_dev.y[t], 2, POINT_COLOR_TBL[t]);  /* 画线 */
                    lastpos[t][0] = tp_dev.x[t];
                    lastpos[t][1] = tp_dev.y[t];
                    
                    if (tp_dev.x[t] > (lcd_dev.width - 24) && tp_dev.y[t] < 20)
                    {
                        load_draw_dialog();                                                                         /* 清除 */
                    }
                }
            }
            else 
            {
                lastpos[t][0] = 0xFFFF;
            }
        }
        
        vTaskDelay(5);
        i++;
        
        if (i % 20 == 0)
        {
            LED_TOGGLE();
        }
    }
}

/**
 * @brief       程序入口
 * @param       无
 * @retval      无
 */
void app_main(void)
{
    uint8_t x = 0;
    esp_err_t ret;

    ret = nvs_flash_init();             /* 初始化NVS */

    lcd_cfg_t lcd_config_info = {0};
    lcd_config_info.notify_flush_ready = NULL;
    
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND)
    {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }

    led_init();                         /* 初始化LED */
    i2c0_master = iic_init(I2C_NUM_0);  /* 初始化IIC0 */
    xl9555_init(i2c0_master);           /* IO扩展芯片初始化 */
    lcd_init(lcd_config_info);          /* 初始化LCD */
    tp_dev.init();                      /* 初始化触摸屏 */
    load_draw_dialog();
    ctp_test();
}
