package com.vzs.myweb.web.controller.test;

import com.google.common.collect.Lists;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * Created by byao on 30/07/2017.
 */
@Controller
@RequestMapping("/3d")
public class HelloController {

    @ResponseBody
    @RequestMapping("/json")
    public String hello() {
        return "Hello: Ben";
    }

    @RequestMapping("/hbs")
    public ModelAndView helloHbs() {
        return new ModelAndView("/hello");
    }

    @RequestMapping("/index")
    public ModelAndView index() {
        return new ModelAndView("3d/youngGardenIndex");
    }

    @RequestMapping("/topleft")
    public ModelAndView topLeft() {
        return new ModelAndView("3d/chartTopLeft");
    }

    @RequestMapping("/topRight")
    public ModelAndView topRight() {
        return new ModelAndView("3d/chartTopRight");
    }

    @RequestMapping("/bottomRight")
    public ModelAndView bottomRight() {
        return new ModelAndView("3d/chartBottomRight");
    }


    @RequestMapping("/youngGarden")
    public ModelAndView findYoungGardenFor3D() {
        ModelAndView modelAndView = new ModelAndView("3d/youngGarden");
        return modelAndView;
    }

    @RequestMapping("/mock")
    @ResponseBody
    public PageInfo findPageInfo() {
        PageInfo pi = new PageInfo();
        List<MockWind> mockWindList = Lists.newArrayList();
        for (int i = 0 ; i< 100 ;i++) {
            mockWindList.add(mock());
        }

        pi.setRows(mockWindList);
        return pi;
    }

    private MockWind mock() {
        MockWind mockWind = new MockWind();
        mockWind.setWind10("01");
        mockWind.setWind11("11");
        mockWind.setWind20("20");
        mockWind.setWind21("21");
        mockWind.setWind30("30");
        mockWind.setWind31("31");
        mockWind.setWind40("40");
        mockWind.setWind41("41");
        return  mockWind;
    }

}
