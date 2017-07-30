package com.vzs.myweb.configuration;

import com.vzs.myweb.configuration.handlebar.VzsEnableHandlebar;
import com.vzs.myweb.web.Webs;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * Created by byao on 29/07/2017.
 */
@Configuration
//@EnableAspectJAutoProxy
@VzsEnableHandlebar
@ComponentScan(basePackageClasses = { Webs.class})
public class ServletApplicationContext extends WebMvcConfigurationSupport {
}
